// common utilities for IndoNumbersHub
export function randInt(min,max){ return Math.floor(Math.random()*(max-min+1))+min }
export function choose(arr){ return arr[Math.floor(Math.random()*arr.length)] }
export function formatNumberList(arr){ return arr.map(n=>String(n).padStart(2,'0')).join(' ')}
export function safeText(s){ return String(s||'').replace(/</g,'&lt;').replace(/>/g,'&gt;') }