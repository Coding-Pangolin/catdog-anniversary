import type { CSSProperties } from 'react';
import { ArrowRight, Check, Heart, PawPrint } from 'lucide-react';
import { familyMembers, familyNames } from './family-data';
import type { FamilyMember } from './family-data';
import s from './Family.module.css';

export function FamilyPortrait({member}:{member:FamilyMember}) {
  const [x,y,size]=member.portrait;
  return <span className={s.portrait} style={{'--portrait-width':`${member.photo.width/size*100}%`,'--portrait-height':`${member.photo.height/size*100}%`,'--portrait-left':`${-x/size*100}%`,'--portrait-top':`${-y/size*100}%`,'--member-color':member.color} as CSSProperties}><PawPrint className={s.portraitFallback} aria-hidden="true"/><img onError={event=>{event.currentTarget.style.visibility='hidden';}} src={member.photo.thumbnail||member.photo.src} alt={member.name+'，'+member.kind} width={member.photo.width} height={member.photo.height} loading="lazy"/></span>;
}

export function FamilyFaces({onMember}:{onMember:(index:number)=>void}) {
  return <div className={s.faces} aria-label="四位毛绒家人">{familyMembers.map((member,index)=><button key={member.id} onClick={()=>onMember(index)} aria-label={`认识家人：${member.name}`}><FamilyPortrait member={member}/><span>{member.name}</span></button>)}</div>;
}

export function FamilyInvitation({onOpen}:{onOpen:()=>void}) {
  return <button className={s.invitation} onClick={onOpen} aria-label="翻开猫猫和狗狗的大家庭"><span className={s.miniFaces}>{familyMembers.map(member=><FamilyPortrait key={member.id} member={member}/>)}</span><span>还有四位毛绒家人，<br/><strong>陪我们一起收藏这一年。</strong></span><ArrowRight size={17}/></button>;
}

export function FamilyRoster({onMember,route=3,wide=false}:{onMember:(index:number)=>void;route?:number;wide?:boolean}) {
  return <div className={`${s.roster} ${wide?s.wideRoster:''}`}>{familyMembers.map((member,index)=><button className={`${s.memberCard} ${route>=(index<2?1:2)?s.lit:''}`} key={member.id} onClick={()=>onMember(index)} aria-label={`认识家人：${member.name}`} style={{'--member-color':member.color} as CSSProperties}><span className={s.number}>FAMILY {String(index+1).padStart(2,'0')}</span><FamilyPortrait member={member}/><span className={s.memberName}>{member.name}</span><span className={s.kind}>{member.kind}</span><span className={s.memberLink}>翻开它的小故事 <ArrowRight size={14}/></span></button>)}</div>;
}

export function FamilyJourney({route,onLight,onMember,onSkip,humanNames}:{route:number;onLight:(index:number)=>void;onMember:(index:number)=>void;onSkip:()=>void;humanNames:string}) {
  return <section className={s.journey} aria-label="我们的大家庭"><div className={s.journeyIntro}><span className={s.eyebrow}>OUR LITTLE FAMILY · WITH LOVE</span><h2>从两个人，<br/>到一个大家庭。</h2><span className={s.humans}><Heart size={19}/>{humanNames}</span><p>{familyNames}，<br/>把普通的日子，陪成柔软的小家。</p><nav className={s.familyPath} aria-label="点亮大家庭的相伴邮路">{['相伴','靠近','团圆'].map((label,index)=><div key={label}><button data-primary={index===Math.min(route,2)} disabled={index>route} aria-label={`点亮节点 ${index+1}：${label}`} aria-pressed={index<route} onClick={()=>onLight(index)}>{index<route?<Check size={21}/>:<PawPrint size={21}/>}</button><span>{label}</span></div>)}</nav><p className={s.pathStatus} role="status">{route===3?'猫猫、狗狗和四位毛绒家人，我们的大家庭到齐啦。':'依次点亮三枚爪印，也可以随时翻开它们的小故事。'}</p><button className={s.skip} onClick={onSkip}>带着大家庭，去读信 <ArrowRight size={18}/></button></div><FamilyRoster onMember={onMember} route={route}/></section>;
}
