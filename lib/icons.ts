// Icon paths
interface Icons {
   [key: string]: {
     [key: string]: string
   };
 };

export const icons: Icons = {
  outline: {
    exclamationCircle: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    upArrow: "M0 15L10 5 20 15",
    rightArrow: "m1.414 1.414 5.995 5.995-5.995 5.994",
    downArrow: "M0 5L10 15 20 5",
    leftArrow: "M6.995 1.414 1 7.409l5.995 5.995",
    close: "M1.03 0a1 1 0 00-.737.293 1 1 0 000 1.414l22 22a1 1 0 001.414 0 1 1 0 000-1.414l-22-22A1 1 0 001.029 0zm22 0a1 1 0 00-.737.293l-22 22a1 1 0 000 1.414 1 1 0 001.414 0l22-22a1 1 0 000-1.414A1 1 0 0023.029 0z",
    marker: "M12.332.75c4.399 0 7.766 3.306 7.766 7.692v.25c0 5.779-5.13 12.97-7.899 14.558h-.066c-2.769-1.588-8.231-8.78-8.231-14.559v-.25C3.902 4.057 7.6.75 12 .75h.332z",
  },
  solid: {
    genting: "M16.5232 9.0426v1.6589h1.0848a7.6123 7.6123 0 01-2.1995 4.5865 7.749 7.749 0 01-1.383 1.0985q-.1777-.3728-.3368-.7518a14.6393 14.6393 0 01-1.101-4.932h1.4664a13.2364 13.2364 0 00.8524 4.0273 6.9475 6.9475 0 001.2041-1.6402 11.7912 11.7912 0 01.0398-6.3573 6.909 6.909 0 00-1.1855-1.6539 13.275 13.275 0 00-.8984 3.9652h-1.4688a14.6754 14.6754 0 011.506-5.6365 7.7477 7.7477 0 011.3036 1.05 7.6148 7.6148 0 011.9596 3.3414h1.7173a9.3296 9.3296 0 00-4.1528-5.8329q.3106-.4809.6585-.937L14.2902 0c-.2995.3902-.5791.7965-.8438 1.214a9.3557 9.3557 0 00-6.894 0A16.7482 16.7482 0 005.7086.0012l-1.2998 1.029c.2324.3044.4511.6212.6586.9369a9.3197 9.3197 0 00.097 15.872q-.3728.6014-.8115 1.1643l1.3234.9941a16.5443 16.5443 0 00.9817-1.4253 9.347 9.347 0 006.6816 0A16.1976 16.1976 0 0014.3237 20l1.3234-.9941q-.435-.5641-.8114-1.1643a9.3097 9.3097 0 004.4821-7.9528v-.8462zM4.5766 15.288a7.662 7.662 0 010-10.832 7.7515 7.7515 0 011.3047-1.05 14.6741 14.6741 0 011.5061 5.6366H5.9199a13.296 13.296 0 00-.8997-3.9652A6.8891 6.8891 0 003.836 6.7313a11.7776 11.7776 0 01.0385 6.3572 6.9798 6.9798 0 001.2041 1.6403 13.2513 13.2513 0 00.8524-4.0273h1.4663a14.6008 14.6008 0 01-1.1022 4.932 13.667 13.667 0 01-.3355.7517 7.7925 7.7925 0 01-1.383-1.0985m5.4166 2.243a7.6583 7.6583 0 01-2.5375-.4287 16.4647 16.4647 0 00-.0882-14.4294 7.7217 7.7217 0 015.2526 0 16.4697 16.4697 0 00-.0883 14.4294 7.6645 7.6645 0 01-2.5374.4287",
    exclamationCircle: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    upArrow: "M0 15L10 5 20 15z",
    rightArrow: "M5 0L15 10 5 20z",
    downArrow: "M0 5L20 5 10 15z",
    leftArrow: "M15 0L15 20 5 10z",
    close: "M10 0A10 10 0 000 10a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0010 0zM5.785 4.583a1.25 1.25 0 01.086 0 1.25 1.25 0 01.846.367L10 8.232l3.283-3.282a1.25 1.25 0 01.835-.367 1.25 1.25 0 01.086 0 1.25 1.25 0 01.846.367 1.25 1.25 0 010 1.767L11.768 10l3.282 3.283a1.25 1.25 0 010 1.767 1.25 1.25 0 01-1.767 0L10 11.768 6.717 15.05a1.25 1.25 0 01-1.767 0 1.25 1.25 0 010-1.767L8.232 10 4.95 6.717a1.25 1.25 0 010-1.767 1.25 1.25 0 01.835-.367z",
    calendar: "M7.028 11.247a.468.468 0 00.467-.468V9.221a.468.468 0 00-.467-.468H5.469a.468.468 0 00-.467.468v1.558a.468.468 0 00.467.468zm4.224-.468V9.221a.468.468 0 00-.468-.468H9.225a.468.468 0 00-.467.468v1.558a.468.468 0 00.467.468h1.559a.468.468 0 00.468-.47zm3.754 0V9.221a.468.468 0 00-.467-.468H12.98a.468.468 0 00-.468.468v1.558a.468.468 0 00.468.468h1.559a.468.468 0 00.467-.47zm-3.754 3.753v-1.558a.468.468 0 00-.468-.468H9.225a.468.468 0 00-.467.468v1.558a.468.468 0 00.467.468h1.559a.468.468 0 00.468-.468zm-3.755 0v-1.558a.468.468 0 00-.468-.468H5.471a.468.468 0 00-.468.468v1.558a.468.468 0 00.468.468h1.558a.468.468 0 00.468-.468zm7.508 0v-1.558a.468.468 0 00-.468-.468h-1.559a.468.468 0 00-.467.468v1.558a.468.468 0 00.467.468h1.56a.468.468 0 00.468-.468zm3.754-10.168a1.87 1.87 0 00-1.87-1.87h-1.87V.468A.468.468 0 0014.55 0h-1.558a.468.468 0 00-.468.468v2.026H7.497V.468A.468.468 0 007.029 0H5.471a.468.468 0 00-.468.468v2.026H3.111a1.87 1.87 0 00-1.87 1.87V18.13A1.87 1.87 0 003.11 20h13.766a1.87 1.87 0 001.87-1.87zm-1.87 13.53a.235.235 0 01-.235.236H3.353a.235.235 0 01-.242-.236V6.241h13.766z",
    tag: "M2.282 0L.685 9.213 8.526 20l10.79-7.842-7.842-10.786zm4.76 4.974a1.667 1.667 0 011.367.686 1.667 1.667 0 01-.369 2.33 1.667 1.667 0 01-2.329-.37 1.667 1.667 0 01.37-2.329 1.667 1.667 0 01.96-.317z",
    marker: "M10.294 0c3.898 0 6.882 2.938 6.882 6.837v.222c0 5.137-4.546 11.53-7 12.941h-.058c-2.454-1.412-7.294-7.804-7.294-12.941v-.222C2.824 2.938 6.102 0 10 0h.294z",
  }
}