export function changeTheme(theme: string) {
  return {
    type: "CHANGE_THEME",
    payload: {
      theme,
    },
  };
}
