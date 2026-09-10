# Archived — 10 September 2026

This is the first 3RD SPACE site. It is kept for reference only. The live
site at **3rdspacesyv.com** is built from
[joetol2/3rdspace-v2](https://github.com/joetol2/3rdspace-v2).

This repo never held the custom domain; it deployed only to its
`github.io` URL. Its twice-daily scheduled build had already stopped on its
own before it was archived: the last run was 2 September 2026, about sixty
days after the last commit on 29 June, which matches GitHub's behaviour of
disabling scheduled workflows in a repository with no activity.

## The branches

| Branch | What it is |
|---|---|
| `main` | The site as it was last deployed |
| `archive/2026-09-10` | Same commit as `main`, pinned at the moment of archiving |
| `backup-pre-big-change` | **Not a backup of `main`** — see below |
| `claude/3rdspace-404-error-ix339p` | Fully merged into `main`, nothing unique |

`backup-pre-big-change` has a misleading name. It is not a snapshot of
`main` taken before some change: the two forked at `4f6a907` and both moved
on. `main` carries 40 commits that branch does not have, and that branch
carries 22 that `main` does not. It is an abandoned line of work. If you go
looking there for "the old version of main", you will not find it.

To compare them:

```sh
git log --oneline main..origin/backup-pre-big-change   # only on the branch
git log --oneline origin/backup-pre-big-change..main   # only on main
```
