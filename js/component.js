window.AlertClass = AlertClass;
// window.ConfirmClass = ConfirmClass;
window.ToastClass = ToastClass;


// 组件样式，引入js自动引入
window.onload = function(){
  let componentStyle = document.createElement('style');
  let componentStyleHtml = 'div.embedAteAlert-bg {' +
    'left:0;' +
    'top:0;' +
    'opacity:0.3;' +
    'background-color:black;' +
    'width:100%;' +
    'height:100%;' +
    'position:fixed;' +
    'z-index:9988;}' +
    'div.embedAteAlert-wrapper {' +
    'position:fixed;' +
    'background-color:rgba(255,253,250,0.52);' +
    'z-index: 9998;' +
    'left:45%;' +
    'top:45%;' +
    'margin-left: auto;' +
    'margin-right: auto;' +
    'padding:10px;' +
    'border-radius: 6px;}' +
    'div.embedAteAlert-content {' +
    'background-color: white;' +
    'border-radius: 4px;' +
    'min-height: 50px;' +
    'padding: 10px;' +
    'min-width: 150px;}' +
    'label.embedAteAlert-msg {' +
    'min-width: 100px;' +
    'max-width: 180px;' +
    'padding-top: 10px;' +
    'padding-bottom: 10px;' +
    'padding-right: 10px;' +
    'margin: auto;' +
    'font-size:14px !important;' +
    'text-align: center;' +
    'display: inline-block;}' +
    'div.embedAteAlert-icon {' +
    'margin-right: 20px;' +
    'margin-top: 0px;' +
    'padding: 10px;' +
    'width: 32px;' +
    'height: 32px;' +
    'float: left;}' +
    'div.embedAteAlert-content div.icon-error {' +
    'background:url(data:image/png;base64,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) center center no-repeat;}' +
    'div.embedAteAlert-content div.icon-success {' +
    'background:url(data:image/png;base64,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) center center no-repeat;}' +
    'div.embedAteAlert-content div.icon-info {' +
    'background:url(data:image/png;base64,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) center center no-repeat;}' +
    'div.loading img{' +
    'margin-right: 20px;' +
    'padding: 1px;' +
    'width: 45px;' +
    'height: 45px;' +
    'float: left;}' +
    'div.loading label.embedAteAlert-msg{' +
    'min-width: 100px;' +
    'max-width: 180px;' +
    'padding: 10px 10px 10px 10px;' +
    'font-size:14px;' +
    'text-align: center;' +
    'display: inline-block;}' +
    'span.embedAteAlert-closeBtn {' +
    'opacity: 0.7;' +
    'background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADZGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkRENzRDMzA3MDkyMDY4MTFBNEUwRDNEMjZENTIxODNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVENUNGRjE0RkMyMTExRTBCOTZFQ0IxNTVCMDk2REM3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVENUNGRjEzRkMyMTExRTBCOTZFQ0IxNTVCMDk2REM3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0UzQjlCOTBGM0UwMTFBMTY1QjZGNDM1RUZCRTM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRENzRDMzA3MDkyMDY4MTFBNEUwRDNEMjZENTIxODNDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ONcKMwAAAQ1JREFUWEftlesKgzAMhdvSHz6ygnjDxxY3T22UZep0jXUwP5C0RTinSdrqx4C6EOPjZdwGph6I3Qpa6zHCQNd1qm1btxCLPM+VtXYsQWxxQJqiPVBVlfuIT3PwG03IXcUCuvc98FaCs8vBte4S/I8BXPdLWB+D6fteGWNWm3htXeQUfPuYiZyCwX/QYxZsoK5rP5rhWdzKqngTlmXpYlEUL5HWOeIGkBGUhRoSEfOlTIE3A/g5FC62Jg5OeY6RduycwBFtmsbPZkROAYfEkUkIIGJOvcARN4CdQpTSTj2xlAHgSoCBdBn2AM3JQAhHzadpqpIkcWOREhwxkGXZJA5EMsDhhrYMnmJgP0o9AZQupyrDq6jhAAAAAElFTkSuQmCC) center center no-repeat;' +
    'margin-right: 0px;' +
    'padding: 10px;' +
    'width: 32px;' +
    'height: 30px;' +
    'cursor: pointer;' +
    'float: right;}' +
    'span.embedAteAlert-closeBtn:hover {' +
    'opacity: 1;}';
    componentStyle.innerHTML = componentStyleHtml;
    document.body.appendChild(componentStyle);
  };


// alert
function AlertClass () {}

AlertClass.prototype.show = function (options) {
  if (this.instance) {
    this.hide ();
  }
  AlertClass.instance = this;
  let content = options.content || '';
  this.hideFn = options.onHide;
  this.icon = options.icon || 'error';
  this.showFn = options.onShow;
  this.duration = options.duration;

  if ('success' == this.icon) {
    iconContent = '<div class="embedAteAlert-icon icon-success"></div>'
  } else if ('info' == this.icon) {
    iconContent = '<div class="embedAteAlert-icon icon-info"></div>'
  } else {
    iconContent = '<div class="embedAteAlert-icon icon-error"></div>'
  }

  let alert = document.createElement ('div');
  alert.innerHTML = ['<div class="embedAteAlert-bg"></div>',
    '<div class="embedAteAlert-wrapper">',
    '<div class="embedAteAlert-content">',
    iconContent,
    '<label class="embedAteAlert-msg">' + content + '</label>',
    '<span class="embedAteAlert-closeBtn" onclick="AlertClass.btnClick()"></span>',
    '</div></div>'].join('');

  document.body.appendChild (alert);

  this.showFn && this.showFn();
  this.onShow && this.onShow();

  this.instance = alert;

  if (duration) {
    setTimeout (function () {
        AlertClass.instance.hide ();
    }, duration);
  }
};

AlertClass.btnClick = function (){
  let instance = AlertClass.instance;
  instance.hide();
};

AlertClass.prototype.hide = function () {
  let instance = this.instance;
  if (instance && instance.parentNode) {
    instance.parentNode.removeChild(instance);
  }
  this.hideFn && this.hideFn();
  this.onHide && this.onHide();
};


// Toast
function ToastClass () {}

ToastClass.prototype.show = function (options) {
  if (this.instance) {
    this.hide ();
  }
  ToastClass.instance = this;
  let text = options.text || 'Loading';
  let duration = options.duration;
  this.showFn = options.onShow;
  this.hideFn = options.onHide;
  let loading = options.loading;

  let toast = document.createElement ('div');
  let innerHTMLArr = ['<div class="embedAteAlert-bg"></div><div class="embedAteAlert-wrapper"><div class="embedAteAlert-content">'];
  if (loading) {
    innerHTMLArr.push('<div class="loading"><img src="data:image/gif;base64,R0lGODlhgACAAKIAAP///93d3bu7u5mZmQAA/wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAEACwCAAIAfAB8AAAD/0i63P4wygYqmDjrzbtflvWNZGliYXiubKuloivPLlzReD7al+7/Eh5wSFQIi8hHYBkwHUmD6CD5YTJLz49USuVYraRsZ7vtar7XnQ1Kjpoz6LRHvGlz35O4nEPP2O94EnpNc2sef1OBGIOFMId/inB6jSmPdpGScR19EoiYmZobnBCIiZ95k6KGGp6ni4wvqxilrqBfqo6skLW2YBmjDa28r6Eosp27w8Rov8ekycqoqUHODrTRvXsQwArC2NLF29UM19/LtxO5yJd4Au4CK7DUNxPebG4e7+8n8iv2WmQ66BtoYpo/dvfacBjIkITBE9DGlMvAsOIIZjIUAixliv9ixYZVtLUos5GjwI8gzc3iCGghypQqrbFsme8lwZgLZtIcYfNmTJ34WPTUZw5oRxdD9w0z6iOpO15MgTh1BTTJUKos39jE+o/KS64IFVmsFfYT0aU7capdy7at27dw48qdS7eu3bt480I02vUbX2F/JxYNDImw4GiGE/P9qbhxVpWOI/eFKtlNZbWXuzlmG1mv58+gQ4seTbq06dOoU6vGQZJy0FNlMcV+czhQ7SQmYd8eMhPs5BxVdfcGEtV3buDBXQ+fURxx8oM6MT9P+Fh6dOrH2zavc13u9JXVJb520Vp8dvC76wXMuN5Sepm/1WtkEZHDefnzR9Qvsd9+/wi8+en3X0ntYVcSdAE+UN4zs7ln24CaLagghIxBaGF8kFGoIYV+Ybghh841GIyI5ICIFoklJsigihmimJOLEbLYIYwxSgigiZ+8l2KB+Ml4oo/w8dijjcrouCORKwIpnJIjMnkkksalNeR4fuBIm5UEYImhIlsGCeWNNJphpJdSTlkml1jWeOY6TnaRpppUctcmFW9mGSaZceYopH9zkjnjUe59iR5pdapWaGqHopboaYua1qije67GJ6CuJAAAIfkEBQUABAAsCgACAFcAMAAAA/9Iutz+ML5Ag7w46z0r5WAoSp43nihXVmnrdusrv+s332dt4Tyo9yOBUJD6oQBIQGs4RBlHySSKyczVTtHoidocPUNZaZAr9F5FYbGI3PWdQWn1mi36buLKFJvojsHjLnshdhl4L4IqbxqGh4gahBJ4eY1kiX6LgDN7fBmQEJI4jhieD4yhdJ2KkZk8oiSqEaatqBekDLKztBG2CqBACq4wJRi4PZu1sA2+v8C6EJexrBAD1AOBzsLE0g/V1UvYR9sN3eR6lTLi4+TlY1wz6Qzr8u1t6FkY8vNzZTxaGfn6mAkEGFDgL4LrDDJDyE4hEIbdHB6ESE1iD4oVLfLAqPETIsOODwmCDJlv5MSGJklaS6khAQAh+QQFBQAEACwfAAIAVwAwAAAD/0i63P5LSAGrvTjrNuf+YKh1nWieIumhbFupkivPBEzR+GnnfLj3ooFwwPqdAshAazhEGUXJJIrJ1MGOUamJ2jQ9QVltkCv0XqFh5IncBX01afGYnDqD40u2z76JK/N0bnxweC5sRB9vF34zh4gjg4uMjXobihWTlJUZlw9+fzSHlpGYhTminKSepqebF50NmTyor6qxrLO0L7YLn0ALuhCwCrJAjrUqkrjGrsIkGMW/BMEPJcphLgDaABjUKNEh29vdgTLLIOLpF80s5xrp8ORVONgi8PcZ8zlRJvf40tL8/QPYQ+BAgjgMxkPIQ6E6hgkdjoNIQ+JEijMsasNY0RQix4gKP+YIKXKkwJIFF6JMudFEAgAh+QQFBQAEACw8AAIAQgBCAAAD/kg0PPowykmrna3dzXvNmSeOFqiRaGoyaTuujitv8Gx/661HtSv8gt2jlwIChYtc0XjcEUnMpu4pikpv1I71astytkGh9wJGJk3QrXlcKa+VWjeSPZHP4Rtw+I2OW81DeBZ2fCB+UYCBfWRqiQp0CnqOj4J1jZOQkpOUIYx/m4oxg5cuAaYBO4Qop6c6pKusrDevIrG2rkwptrupXB67vKAbwMHCFcTFxhLIt8oUzLHOE9Cy0hHUrdbX2KjaENzey9Dh08jkz8Tnx83q66bt8PHy8/T19vf4+fr6AP3+/wADAjQmsKDBf6AOKjS4aaHDgZMeSgTQcKLDhBYPEswoA1BBAgAh+QQFBQAEACxOAAoAMABXAAAD7Ei6vPOjyUkrhdDqfXHm4OZ9YSmNpKmiqVqykbuysgvX5o2HcLxzup8oKLQQix0UcqhcVo5ORi+aHFEn02sDeuWqBGCBkbYLh5/NmnldxajX7LbPBK+PH7K6narfO/t+SIBwfINmUYaHf4lghYyOhlqJWgqDlAuAlwyBmpVnnaChoqOkpaanqKmqKgGtrq+wsbA1srW2ry63urasu764Jr/CAb3Du7nGt7TJsqvOz9DR0tPU1TIA2ACl2dyi3N/aneDf4uPklObj6OngWuzt7u/d8fLY9PXr9eFX+vv8+PnYlUsXiqC3c6PmUUgAACH5BAUFAAQALE4AHwAwAFcAAAPpSLrc/m7IAau9bU7MO9GgJ0ZgOI5leoqpumKt+1axPJO1dtO5vuM9yi8TlAyBvSMxqES2mo8cFFKb8kzWqzDL7Xq/4LB4TC6bz1yBes1uu9uzt3zOXtHv8xN+Dx/x/wJ6gHt2g3Rxhm9oi4yNjo+QkZKTCgGWAWaXmmOanZhgnp2goaJdpKGmp55cqqusrZuvsJays6mzn1m4uRAAvgAvuBW/v8GwvcTFxqfIycA3zA/OytCl0tPPO7HD2GLYvt7dYd/ZX99j5+Pi6tPh6+bvXuTuzujxXens9fr7YPn+7egRI9PPHrgpCQAAIfkEBQUABAAsPAA8AEIAQgAAA/lIutz+UI1Jq7026h2x/xUncmD5jehjrlnqSmz8vrE8u7V5z/m5/8CgcEgsGo/IpHLJbDqf0Kh0ShBYBdTXdZsdbb/Yrgb8FUfIYLMDTVYz2G13FV6Wz+lX+x0fdvPzdn9WeoJGAYcBN39EiIiKeEONjTt0kZKHQGyWl4mZdREAoQAcnJhBXBqioqSlT6qqG6WmTK+rsa1NtaGsuEu6o7yXubojsrTEIsa+yMm9SL8osp3PzM2cStDRykfZ2tfUtS/bRd3ewtzV5pLo4eLjQuUp70Hx8t9E9eqO5Oku5/ztdkxi90qPg3x2EMpR6IahGocPCxp8AGtigwQAIfkEBQUABAAsHwBOAFcAMAAAA/9Iutz+MMo36pg4682J/V0ojs1nXmSqSqe5vrDXunEdzq2ta3i+/5DeCUh0CGnF5BGULC4tTeUTFQVONYAs4CfoCkZPjFar83rBx8l4XDObSUL1Ott2d1U4yZwcs5/xSBB7dBMBhgEYfncrTBGDW4WHhomKUY+QEZKSE4qLRY8YmoeUfkmXoaKInJ2fgxmpqqulQKCvqRqsP7WooriVO7u8mhu5NacasMTFMMHCm8qzzM2RvdDRK9PUwxzLKdnaz9y/Kt8SyR3dIuXmtyHpHMcd5+jvWK4i8/TXHff47SLjQvQLkU+fG29rUhQ06IkEG4X/Rryp4mwUxSgLL/7IqFETB8eONT6ChCFy5ItqJomES6kgAQAh+QQFBQAEACwKAE4AVwAwAAAD/0i63A4QuEmrvTi3yLX/4MeNUmieITmibEuppCu3sDrfYG3jPKbHveDktxIaF8TOcZmMLI9NyBPanFKJp4A2IBx4B5lkdqvtfb8+HYpMxp3Pl1qLvXW/vWkli16/3dFxTi58ZRcChwIYf3hWBIRchoiHiotWj5AVkpIXi4xLjxiaiJR/T5ehoomcnZ+EGamqq6VGoK+pGqxCtaiiuJVBu7yaHrk4pxqwxMUzwcKbyrPMzZG90NGDrh/JH8t72dq3IN1jfCHb3L/e5ebh4ukmxyDn6O8g08jt7tf26ybz+m/W9GNXzUQ9fm1Q/APoSWAhhfkMAmpEbRhFKwsvCsmosRIHx444PoKcIXKkjIImjTzjkQAAIfkEBQUABAAsAgA8AEIAQgAAA/VIBNz+8KlJq72Yxs1d/uDVjVxogmQqnaylvkArT7A63/V47/m2/8CgcEgsGo/IpHLJbDqf0Kh0Sj0FroGqDMvVmrjgrDcTBo8v5fCZki6vCW33Oq4+0832O/at3+f7fICBdzsChgJGeoWHhkV0P4yMRG1BkYeOeECWl5hXQ5uNIAOjA1KgiKKko1CnqBmqqk+nIbCkTq20taVNs7m1vKAnurtLvb6wTMbHsUq4wrrFwSzDzcrLtknW16tI2tvERt6pv0fi48jh5h/U6Zs77EXSN/BE8jP09ZFA+PmhP/xvJgAMSGBgQINvEK5ReIZhQ3QEMTBLAAAh+QQFBQAEACwCAB8AMABXAAAD50i6DA4syklre87qTbHn4OaNYSmNqKmiqVqyrcvBsazRpH3jmC7yD98OCBF2iEXjBKmsAJsWHDQKmw571l8my+16v+CweEwum8+hgHrNbrvbtrd8znbR73MVfg838f8BeoB7doN0cYZvaIuMjY6PkJGSk2gClgJml5pjmp2YYJ6dX6GeXaShWaeoVqqlU62ir7CXqbOWrLafsrNctjIDwAMWvC7BwRWtNsbGFKc+y8fNsTrQ0dK3QtXAYtrCYd3eYN3c49/a5NVj5eLn5u3s6e7x8NDo9fbL+Mzy9/T5+tvUzdN3Zp+GBAAh+QQJBQAEACwCAAIAfAB8AAAD/0i63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdArcQK2TOL7/nl4PSMwIfcUk5YhUOh3M5nNKiOaoWCuWqt1Ou16l9RpOgsvEMdocXbOZ7nQ7DjzTaeq7zq6P5fszfIASAYUBIYKDDoaGIImKC4ySH3OQEJKYHZWWi5iZG0ecEZ6eHEOio6SfqCaqpaytrpOwJLKztCO2jLi1uoW8Ir6/wCHCxMG2x7muysukzb230M6H09bX2Nna29zd3t/g4cAC5OXm5+jn3Ons7eba7vHt2fL16tj2+QL0+vXw/e7WAUwnrqDBgwgTKlzIsKHDh2gGSBwAccHEixAvaqTYcFCjRoYeNyoM6REhyZIHT4o0qPIjy5YTTcKUmHImx5cwE85cmJPnSYckK66sSAAj0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gwxZJAAA7LyogIHx4R3YwMHwzNjY3YzY4MzBmOTBmNjgzODNmN2ViN2E0OWQ0MTEyMCAqLw==" />');
    innerHTMLArr.push('<label class="embedAteAlert-msg">' + text + '</label></div></div>');
  } else {
    innerHTMLArr.push('<div class="embedAteAlert-icon icon-info"></div>');
    innerHTMLArr.push('<label class="embedAteAlert-msg">' + text + '</label>');
    innerHTMLArr.push('<span class="embedAteAlert-closeBtn"></span></div></div>');
  }

  toast.innerHTML = innerHTMLArr.join ('');
  document.body.appendChild (toast);

  // 开启事件
  this.showFn && this.showFn();
  // 如果有全局事件，则执行
  this.onShow && this.onShow();

  this.instance = toast;

  if (duration) {
    setTimeout (function () {
      ToastClass.instance.hide ();
    }, duration);
  }

};

ToastClass.prototype.hide = function () {
  let instance = this.instance;
  if (instance && instance.parentNode) {
    instance.parentNode.removeChild(instance);
  }

  // 关闭事件
  this.hideFn && this.hideFn();
  // 如果有全局事件，则执行
  this.onHide && this.onHide();
};
