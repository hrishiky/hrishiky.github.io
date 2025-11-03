---
layout: post
title: How to program on a (school) Chromebook
---

I do not own a computer. This means that to program, I can either wait until I get home or find a method to program on the school computer. I, as well as many others, have a Chromebook as the school computer. Either due to strict parenting or a lack of funds, many people can only access online content through this Chromebook. Back to the point, the methods for programming on a Chromebook differ based on whether the device is managed by the school or not.

Normal Chromebook:
For normal chromebooks, it is much easier to setup a development environment. ChromeOS is a Linux distro, meaning that you can simply go into the settings and enable the shell, allowing you to run executables and do most of what you can on any other GNU/Linux distro. Obviously, the other option is to simply install another operating system, which would rid you of having this problem in the first place.

School Chromebook:
Most school networks have nearly everything blocked on the Chromebook, allowing access to a select few sites they deem appropriate for use. There are two types of school networks, those that allow GitHub and those that do not. If GitHub is unblocked, one can simply use a GitHub Codespace, which provides almost all funcitonality that a GNU/Linux distro does (no GUI applications though). I personally use these to develop this website. 
Without GitHub, though, many more complications arise. The most obvious way to do this through online compilers, like ones offered by W3Schools. The other way to do this is through online virtual machines or operating system emulators, but there is no standard for this and are difficult to find for free. The only viable and reliable method for when GitHub is blocked is simply through the online compilers. This raises the issue of storing code, sinse most online compilers do not offer funcitonality outside of just running code. To do this, one needs a text editor. ChromeOS, being how poorly made it is, does not have a text editor. The way I get around this is through creating a simple .html file (which can be opened with Google Chrome) which contains an input tag and some JS to download that text as a .txt file (which can also be viewed with Chrome). 

These methods should allow for basic developement (that does not involve GUI applications). Although they are difficult to use and feature-poor, something is better than nothing.