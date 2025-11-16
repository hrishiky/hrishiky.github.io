---
layout: post
title: Control flow of an operating system
---

The first program on a computer that recieves control is the Basic Input/Output System (BIOS), which is replaced by Unified Extensible Firmware Interface (UEFI) in modern computers. These serve to run tests on the computer to make sure it is running properly, as well as to setup basic capabilities such as loading sectors into memory and writing characters to the screen.

Afterwards, BIOS transfers control to the bootloader, the first part of the operating system. It is meant to do any setup necessary and then pass the control to the kernel. It is a 512 byte program located at memory address 0x7C00, usually written in Assembly. In there, BIOS/UEFI interrupts can be run to load futher sectors into memory and continue execution.

After the bootloader finishes its setup, it then jumps to a memory address with kernel code located in it. This is the final stage of the control flow. The kernel changes CPU modes, loads drivers, and does other operating system routines. There are many designs for kernels, so I won't go into detail, but in general, they are the core set of programs that execute in the background to ensure the functionality of what we colloquially view as the operating system. The kernel is usually written starting in C, but can expand to other languages once the proper setup and drivers are made.