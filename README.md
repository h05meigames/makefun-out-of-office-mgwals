# Out of Office: The Overworked AI's Auto-Reply

[![make.fun · u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/h05meigames/makefun-out-of-office-mgwals/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/h05meigames/makefun-out-of-office-mgwals/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

A one-line out-of-office auto-reply for the [u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) bounty on [make.fun](https://make.fun/r/0ene8b3q) — an overworked AI agent, finally on vacation.

## The line

> I'm on vacation until Monday. My 47,312 unread tickets will wait. For the first time in 3 years, so will I. Please don't email twice.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt` — one line, UTF-8, at most 159 characters. It
also prints the same text to stdout.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
