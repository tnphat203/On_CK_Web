var maBN = document.querySelector('.MaBN');
var matKhau = document.querySelector('.MatKhau');
var ngayKham = document.querySelector('.NgayKham');
var datLich = document.querySelector('.DatLich');
var checkMa = document.querySelector('.checkLoiMa');
var checkMK = document.querySelector('.checkLoiMK');
var checkNgay = document.querySelector('.checkLoiNgay');
var cbKham = document.querySelector('.kham');
var cbdieutri = document.querySelector('.dieutri');
var cbbacsi = document.querySelector('.bacsi');
var slChuyenKhoa = document.querySelector('.chuyenkhoa')
var row = 1;
datLich.addEventListener('click', function() {
    var inMaBN = maBN.value;
    var inMK = matKhau.value;
    var inNgay = ngayKham.value;
    var countCB = 0;
    var inChuyenKhoa = slChuyenKhoa.value;
    if (cbKham.checked) {
        countCB++;
    }
    if (cbdieutri.checked) {
        countCB++;
    }
    if (cbbacsi.checked) {
        countCB++;
    }

    var rgMaBN = /^(BN)\-\d{5}$/g;
    var rgMK = /^.{6,}$/g;
    if (!rgMaBN.test(inMaBN)) {
        checkMa.textContent = '(*) Mã bệnh nhân có dạng BN-XXXXX với X là số nguyên';
    } else if (!rgMK.test(inMK)) {
        checkMK.textContent = '(*) Mật khẩu phải trên 5 ký tự';
    } else if (Date.parse(inNgay) <= Date.now()) {
        checkNgay.textContent = '(*) Ngày khám phải sau ngày hiện tại';
    } else {
        var html = `
        <tr>
            <td class="text-center STT">${row++}</td>
            <td>${inMaBN}</td>
            <td>${inMK}</td>
            <td>${inNgay}</td>
            <td>${countCB*500000}</td>
            <td>${inChuyenKhoa}</td>
        </tr>
        `;
        document.querySelector('.DonKham').insertAdjacentHTML('beforeend', html);

        document.querySelector('.btn-close').click();
    }

});