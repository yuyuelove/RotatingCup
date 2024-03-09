// 获取容器元素
const cupContainer = document.getElementById('cup-container');

// 创建立体杯子元素
const cup = document.createElement('div');
cup.classList.add('cup');
cupContainer.appendChild(cup);

// 设置立体杯子的样式
cup.style.width = '100px';
cup.style.height = '200px';
cup.style.backgroundColor = 'transparent';
cup.style.border = '20px solid #ccc';
cup.style.borderRadius = '50%';
cup.style.position = 'relative';
cup.style.transformStyle = 'preserve-3d';
cup.style.animation = 'spin 5s linear infinite';

// 创建杯子的两个面
const frontFace = document.createElement('div');
frontFace.classList.add('face');
frontFace.style.width = '100%';
frontFace.style.height = '100%';
frontFace.style.backgroundColor = '#fff';
frontFace.style.position = 'absolute';
frontFace.style.transform = 'rotateY(0deg) translateZ(10px)';
cup.appendChild(frontFace);

const backFace = document.createElement('div');
backFace.classList.add('face');
backFace.style.width = '100%';
backFace.style.height = '100%';
backFace.style.backgroundColor = '#fff';
backFace.style.position = 'absolute';
backFace.style.transform = 'rotateY(180deg) translateZ(10px)';
cup.appendChild(backFace);

// 创建旋转动画
const keyframes = `
  @keyframes spin {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(360deg); }
  }
`;

// 将动画样式插入到页面中
const style = document.createElement('style');
style.innerHTML = keyframes;
document.head.appendChild(style);
