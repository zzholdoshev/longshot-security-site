/* Original visual effects; no network activity, telemetry, persistent storage or dependencies. */
(() => {
 const root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)'),canvas=document.getElementById('signal-field');
 if(!canvas)return;
 const ctx=canvas.getContext('2d');if(!ctx)return;
 const progress=document.querySelector('.reading-progress i'),scout=document.getElementById('scout');
 let width=0,height=0,dpr=1,nodes=[],frame=0,last=0,elapsed=0,scrollQueued=false;
 const pointer={x:-1000,y:-1000};
 const disabled=()=>root.classList.contains('motion-paused')||reduce.matches||document.hidden;
 function resize(){width=innerWidth;height=innerHeight;dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);const count=width<650?18:42;nodes=Array.from({length:count},(_,i)=>({x:((i*173+41)%997)/997*width,y:((i*269+83)%991)/991*height,vx:Math.sin(i*2.3)*.11,vy:Math.cos(i*1.9)*.1,size:i%8===0?2:1}));draw(0);}
 function draw(delta){ctx.clearRect(0,0,width,height);elapsed+=delta;for(let i=0;i<nodes.length;i++){const a=nodes[i];a.x=(a.x+a.vx*delta/16+width)%width;a.y=(a.y+a.vy*delta/16+height)%height;for(let j=i+1;j<nodes.length;j++){const b=nodes[j],distance=Math.hypot(a.x-b.x,a.y-b.y);if(distance<155){ctx.strokeStyle=`rgba(126,184,180,${.13*(1-distance/155)})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}ctx.fillStyle=i%7===0?'rgba(229,112,126,.4)':'rgba(163,212,194,.28)';ctx.fillRect(a.x,a.y,a.size,a.size);if(i%8===0){ctx.strokeStyle='rgba(163,212,194,.12)';ctx.beginPath();ctx.arc(a.x,a.y,5+Math.sin(elapsed/1800+i)*2,0,Math.PI*2);ctx.stroke();}const pd=Math.hypot(a.x-pointer.x,a.y-pointer.y);if(pd<140){ctx.strokeStyle=`rgba(229,112,126,${.16*(1-pd/140)})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(pointer.x,pointer.y);ctx.stroke();}}}
 function tick(time){frame=0;if(disabled())return;if(time-last>=33){draw(last?Math.min(time-last,60):0);last=time;}frame=requestAnimationFrame(tick);}
 function sync(){if(disabled()){cancelAnimationFrame(frame);frame=0;last=0;}else if(!frame){last=0;frame=requestAnimationFrame(tick);}}
 function updateProgress(){scrollQueued=false;const range=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${range>0?Math.min(1,Math.max(0,scrollY/range)):0})`;}
 addEventListener('resize',()=>{resize();updateProgress();},{passive:true});addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateProgress);}},{passive:true});
 if(matchMedia('(pointer: fine)').matches)addEventListener('pointermove',e=>{pointer.x=e.clientX;pointer.y=e.clientY;},{passive:true});
 document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',sync);new MutationObserver(sync).observe(root,{attributes:true,attributeFilter:['class']});
 const title=document.getElementById('hero-title');let index=0;
 for(const element of [title,...title.querySelectorAll('span')]){for(const node of [...element.childNodes]){if(node.nodeType!==Node.TEXT_NODE)continue;const fragment=document.createDocumentFragment();for(const part of node.textContent.split(/(\s+)/)){if(!part.trim()){fragment.append(document.createTextNode(part));continue;}const word=document.createElement('span');word.className='motion-word';word.textContent=part;word.style.setProperty('--word-index',index++);fragment.append(word);}node.replaceWith(fragment);}}
 function react(className){if(disabled())return;scout.classList.remove('is-cheering','is-thinking');void scout.offsetWidth;scout.classList.add(className);}
 scout.querySelector('.scout-character').addEventListener('animationend',()=>scout.classList.remove('is-cheering','is-thinking'));
 document.getElementById('scout-next').addEventListener('click',()=>react('is-thinking'));
 document.getElementById('scout-character').addEventListener('click',()=>react('is-cheering'));
 document.querySelectorAll('.button,.nav-download').forEach(a=>a.addEventListener('click',()=>react('is-cheering')));
 resize();updateProgress();sync();
})();
