import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[Dark-Techno]───╮
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I'm Dark-Techno Bot\n⬡│ I'm Online Now...! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│ Dark-Techno-MD
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 Dark-Joker
⬡│📞 For any help, contact:
⬡│📱 wa.me/94775207710
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .translate \n⬡│- Translates text to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing Techno Bot! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
