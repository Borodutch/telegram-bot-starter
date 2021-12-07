import Context from '@/models/Context'

export default function sendOptions(ctx: Context) {
  return {
    reply_to_message_id: ctx.msg?.message_id,
    parse_mode: 'HTML' as const,
  }
}
