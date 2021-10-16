import{Schedule}from "../interface/schedule";
import{Team}from "../interface/team";
export const SEASON_SCHEDULE:Schedule[]=[
    {id:1,playingDate:new Date(2021,08,10),HomeTeam: 'Persija', 
    AwayTeam:'Bali United', HomeScore:3,AwayScore:2, 
    RefName:'Joko',notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,08,11),HomeTeam: 'Evos', 
    AwayTeam:'Persipon', HomeScore:4,AwayScore:2, 
    RefName:'Kasjo',notes:'Pertandingan Overtime'},
]
export const TEAM :Team[]=[
    {id:1,name:'Persija',type:'Over 30'},
    {id:2,name:'EVOS',type:'Over 30'},
]