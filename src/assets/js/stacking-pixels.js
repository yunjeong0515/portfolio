// 📁 src/assets/js/stacking-pixels.js
export default function stackingPixels() {
  const pixelContainer = document.getElementById("pixel-container");
  const stackHeights = {}; // 각 x 위치별로 쌓이는 높이를 저장하는 객체

  if (!pixelContainer) return;

  // function createPixel() {
  //   const pixel = document.createElement("div");
  //   pixel.classList.add("pixel");

  //   // 수평 위치를 더 세밀하게 설정 (0.1vw 단위로)
  //   const leftPosition = (Math.floor(Math.random() * 1000) / 10).toFixed(1);
  //   pixel.style.left = `${leftPosition}vw`;

  //   // 픽셀의 색상을 랜덤으로 지정
  //   const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
  //     Math.random() * 256
  //   )}, ${Math.floor(Math.random() * 256)})`;
  //   pixel.style.backgroundColor = randomColor;

  //   // 해당 위치에 쌓인 높이가 없으면 초기화
  //   if (!stackHeights[leftPosition]) {
  //     stackHeights[leftPosition] = 0;
  //   }

  //   // 픽셀들이 서로 다른 속도로 떨어지도록 랜덤한 애니메이션 지속 시간을 설정
  //   const duration = 5 + Math.random() * 3;
  //   pixel.style.animationDuration = `${duration}s`;

  //   // 픽셀을 컨테이너에 추가
  //   pixelContainer.appendChild(pixel);

  //   // 애니메이션이 끝나면 픽셀의 위치를 고정하여 쌓이게 설정
  //   setTimeout(() => {
  //     pixel.style.animation = "none";
  //     pixel.style.bottom = `${stackHeights[leftPosition]}px`;
  //     stackHeights[leftPosition] += 5;
  //   }, duration * 1000);
  // }

  function createPixel() {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    const leftPosition = (Math.floor(Math.random() * 1000) / 10).toFixed(1);
    pixel.style.left = `${leftPosition}vw`;

    // --- 지정된 색상 테마 적용 ---
    const colorPalette = [
      "#004BF0", // 메인 파랑
      "#FF017E", // 메인 핑크
      "#FFFFFF", // 순수 흰색
      "#F8F9FF", // 아주 연한 푸른빛 흰색
      "#FFF0F5", // 아주 연한 핑크빛 흰색
    ];

    // 배열에서 랜덤하게 하나 선택
    const randomColor =
      colorPalette[Math.floor(Math.random() * colorPalette.length)];
    pixel.style.backgroundColor = randomColor;

    // 선택 사항: 흰색 계열일 때만 약간의 투명도를 주면 겹쳤을 때 더 예쁩니다.
    if (randomColor.startsWith("#F")) {
      pixel.style.opacity = "0.9";
    }
    // -----------------------

    if (!stackHeights[leftPosition]) {
      stackHeights[leftPosition] = 0;
    }

    const duration = 5 + Math.random() * 3;
    pixel.style.animationDuration = `${duration}s`;

    pixelContainer.appendChild(pixel);

    setTimeout(() => {
      pixel.style.animation = "none";
      pixel.style.bottom = `${stackHeights[leftPosition]}px`;
      stackHeights[leftPosition] += 5;
    }, duration * 1000);
  }

  // 일정 간격으로 새로운 픽셀을 생성
  setInterval(createPixel, 500);
}
