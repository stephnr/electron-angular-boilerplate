Contributing to Electron Boilerplate
---

Thank you for considering to help contribute to our source code and to make Electron Boilerplate even better than it is today! Here are some of the guidelines we would like you to follow:

- [Issues and Bugs](#issues)
- [Feature Request](#feature-request)
- [Submission Guidelines](#submission)
- [Submitting a Pull Request](#pull-request)

## <a name="issues"></a> Found an Issue?

If you find a bug in the source code or a mistake in the documentation/wikis, you can help remedy it by submitting an issue to [Github Repository](https://github.com/Stephn-R/Electron-Boilerplate/issues)

***Please see the Submission Guidelines below***

## <a name="feature-request"></a> Want a feature?

You can request a new feature by submitting an issue to our [Github Repository](https://github.com/Stephn-R/Electron-Boilerplate). If you would like to implement a new feature yourself then consider what kind of change it is:

- ***Major Changes***: that can dramatically change the core functionality of the plugin
- ***Small Changes***: can be crafted and submitted to the [Github Repository](https://github.com/Stephn-R/Electron-Boilerplate) as a Pull Request

## <a name="submission"></a> Submission Guidelines:

_Before you submit an issue, search the archive. Your question may have already been answered._

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize the effort we can spend fixing issues and adding new features by not reporting duplicate issues. Providing the following information will increase the chances of your issue being dealt with quickly:

- **Overview of the Issue** - if an error is being thrown, a _non minified_ stack trace helps
- **Motivation for or Use Case** - explain why this is a bug for you
- **Versioning** - is this issue being caused because of an outdated plugin?
- **Operating Systems** - is this a problem that is unique to your Operating System?
- **Reproduce the Error** - provide steps on how to re-create the error
- **Related Issues** - has a similar issue been reported before?
- **Suggest a fix** - if you can't fix the bug yourself, perhaps you can point to what might be causing the problem (i.e. line of code or commit)

## <a name="pull-request"></a> Submitting a Pull Request

Before you submit a pull request consider the following guidelines:

- Search [Github](https://github.com/Stephn-R/Electron Boilerplate/pulls) for an open or closed PR that relates to your submission. You do not want to duplicate effort.
- Make your changes in a new git branch:
```bash
git checkout -b my-fix-branch master
```
- Commit your changes using a descriptive commit message that easily describes the resolution. Please note that providing a further description can be made in the PR submission form
```bash
git commit -a
```
- Push your branch to Github
```bash
git push origin my-fix-branch
```
- In Github, submit a PR to ```Electron-Boilerplate```
- If we suggest changes then:
	- Make the required updates
	- Rebase your branch and force push to your Github Repo _(this will update your PR)_:
	```bash
	git rebase master -i
	git push origin my-fix-branch -f
	```

**That's it! Thank you for your contribution**
