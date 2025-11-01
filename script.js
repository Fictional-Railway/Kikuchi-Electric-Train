// 運行情報表示サンプル
const serviceStatus = document.getElementById('service-status');

function updateServiceInfo() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('ja-JP');
    // ここは例：平常運転
    const info = `<p>${dateStr} 現在、全線で平常どおり運行しています。</p>`;
    serviceStatus.innerHTML = info;
}

// 初回表示
updateServiceInfo();
