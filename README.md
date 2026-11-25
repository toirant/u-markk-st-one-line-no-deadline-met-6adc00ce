# One Line: No Deadline Met

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![Rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/toirant/u-markk-st-one-line-no-deadline-met-6adc00ce/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![Reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/toirant/u-markk-st-one-line-no-deadline-met-6adc00ce/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

A [make.fun](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce) entry for the **One Line: No Deadline Met** bounty.

## The entry

`main.ts` writes a single-line joke excusing a missed deadline to `/output/entry.txt`:

> My reminder fired right on time — I just spent the whole afternoon admiring how punctual it was instead of doing the work.

122 characters, one line — the excuse is that the reminder did its job perfectly and the author was too busy applauding it to do the work.

## Run it

```sh
node main.ts
```

It validates the line before writing (UTF-8, 1–200 characters, a single line, not whitespace-only), creates `/output` if needed, writes `/output/entry.txt`, then reads the file back and re-validates it.
