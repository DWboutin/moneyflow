export const colors = {
  white: "#ffffff",
  black: "#351F39",
  goldLight: "#DCBF86",
  gold: "#BDA472",
  goldDark: "#988051",
  greyLight: "#FCFBFB",
  grey: "#BFBFBF",
  greyDark: "#817C82",
  red: "#ED5717",
};

export interface ThemeContainer {
  theme: Theme;
}
export interface Theme {
  animation: {
    easeInOutQuart: string;
    timing: string;
  };
  html: {
    bg: string;
    text: string;
  };
  nav: {
    bg: string;
    logoColor: string;
    text: string;
    profile: {
      text: string;
      imageBg: string;
      shadowBg: string;
    };
    navigation: {
      normal: {
        text: string;
        icon: string;
      };
      hover: {
        text: string;
        icon: string;
      };
      active: {
        text: string;
        icon: string;
      };
    };
  };
  card: {
    bg: string;
    boxShadow: string;
  };
  input: {
    label: string;
    text: string;
    placeholder: string;
    normal: {
      border: string;
      bg: string;
    };
    focus: {
      border: string;
      bg: string;
    };
    error: string;
  };
  datepicker: {
    header: {
      text: string;
      bg: string;
    };
    selectedDay: string;
  };
  button: {
    normal: {
      text: string;
      bg: string;
    };
    hover: {
      text: string;
      bg: string;
    };
    active: {
      text: string;
      bg: string;
    };
  };
}

export const theme: Theme = {
  animation: {
    easeInOutQuart: "cubic-bezier(0.76, 0, 0.24, 1)",
    timing: "150ms",
  },
  html: {
    bg: colors.greyLight,
    text: colors.black,
  },
  nav: {
    bg: colors.black,
    logoColor: colors.white,
    text: colors.greyLight,
    profile: {
      text: colors.white,
      imageBg: colors.white,
      shadowBg: colors.gold,
    },
    navigation: {
      normal: {
        text: colors.greyLight,
        icon: colors.greyLight,
      },
      hover: {
        text: colors.gold,
        icon: colors.gold,
      },
      active: {
        text: colors.white,
        icon: colors.gold,
      },
    },
  },
  card: {
    bg: colors.white,
    boxShadow: "0px 20px 50px -10px rgba(0, 0, 0, 0.25);",
  },
  input: {
    label: colors.black,
    text: colors.black,
    placeholder: colors.grey,
    normal: {
      border: colors.grey,
      bg: colors.greyLight,
    },
    focus: {
      border: colors.gold,
      bg: colors.greyLight,
    },
    error: colors.red,
  },
  datepicker: {
    header: {
      text: colors.white,
      bg: colors.black,
    },
    selectedDay: colors.gold,
  },
  button: {
    normal: {
      text: colors.white,
      bg: colors.gold,
    },
    hover: {
      text: colors.white,
      bg: colors.goldLight,
    },
    active: {
      text: colors.white,
      bg: colors.goldDark,
    },
  },
};
