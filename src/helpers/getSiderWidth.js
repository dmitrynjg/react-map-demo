export default function getSiderWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 300) {
    return 180;
  } else if (screenWidth < 768) {
    return 250;
  } else if (screenWidth < 1200) {
    return 300;
  }
  return 350;
}
