import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[X C O C O]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.sender)}
⬡│☂︎ 🤪I\'m alive now..🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *Xcoco-MD-v1*
⬡│☂︎ *WHATSAPP BOT CODED BY👇🏽*
⬡│☂︎           *Sandaru*
⬡│☂︎           *OWNER:👇🏽*
⬡│☂︎ *wa.me/94764497078*
⬡│☂︎ *Don\'t call owner or you will be*
⬡│☂︎ *Ignored or blocked without*
⬡│☂︎           *warning 🥴😹*
┬│☂︎ *Hehehehe...🤪😸😸*
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│☂︎ _*👇🏽Litle Guide to use bot👇🏽*_
⬡│☂︎ .menu *All menu of bot*
⬡│☂︎ .sticker *Image to sticker*
⬡│☂︎ .play *Youtube video/audio*
┬│☂︎ .gimage *Google image downloader*
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using xcoco-MD-v1 ✍🏽🌿🥰*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
