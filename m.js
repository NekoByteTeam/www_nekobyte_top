// 默哀模式
const anniversaries = {
    5.12: '汶川大地震纪念日',
    7.7: '中国人民抗日战争纪念日',
    9.18: '九·一八事变纪念日',
    12.13: '南京大屠杀死难者国家公祭日',
}

function checkDays() {
    const myDate = new Date()
    const mon = myDate.getMonth() + 1
    const date = myDate.getDate()
    const key = `${mon}.${date}`
    if (Object.prototype.hasOwnProperty.call(anniversaries, key)) {
        console.log(`今天是${anniversaries[key]}, 默哀模式已开启`)
        const gray = document.createElement('style')
        gray.innerHTML = 'html{filter: grayscale(100%)}'
        document.head.appendChild(gray)
    }
}

const siteDateStatistics = (startDate) => {
    const currentDate = new Date()
    const differenceInTime = currentDate.getTime() - startDate.getTime()
    const differenceInDays = differenceInTime / (1000 * 3600 * 24)
    return `本站已经稳定运行了 ${Math.round(differenceInDays)} 天`
}
setTimeout(
    checkDays()
    , 0)

var HoldLog = console.log
console.log = function () { }
queueMicrotask(() => {
    const Log = function () {
        HoldLog.apply(console, arguments)
    }

    setTimeout(Log.bind(console, '%c WELCOME %c Hello!', 'color:white;background-color:#4f90d9', '')
        , 250)

    setTimeout(
        Log.bind(console, '%c NekoWeb-1 %c 你正在访问 NeoPixel Wiki', 'color:white;background-color:#f0ad4e', '')
        , 300)

    setTimeout(
        Log.bind(console, '%c NekoWeb-2 %c Powered by NekoByte', 'color:white;background-color:#f0ad4e', '')
        , 300)        

    setTimeout(
        Log.bind(console, '%c NekoWeb-3 %c 你已打开控制台', 'color:white;background-color:#4f90d9', '')
        , 350)

    setTimeout(
        Log.bind(console, `%c NekoWeb-4 %c ${siteDateStatistics(new Date('2022-01-03'))}.`, 'color:white;background-color:#4f90d9', '')
        , 450)
    // NekoByte Network
    setTimeout(
        function () {
            const startTime = performance.now()
            fetch(`/`)
                .then(response => {
                    return response.blob()
                })
                .then(_ => {
                    const endTime = performance.now()
                    // 计算延迟
                    const delay = endTime - startTime
                    setTimeout(
                        Log.bind(console, `%c NekoWeb %c 已连接到 NekoByte 网络！`, 'color:black;background-color:#87ceeb', '')
                        , 0)
                    setTimeout(
                        Log.bind(console, `%c NekoWeb %c 收发正常！延迟：${delay} ms`, 'color:black;background-color:#87ceeb', '')
                        , 100)
                })
                .catch(_ => {
                    setTimeout(
                        Log.bind(console, `%c NekoWeb %c 无法连接到 NekoByte 网络！`, 'color:black;background-color:#d9534f', '')
                        , 0)
                })
        }
        , 1000)
    // XiaoYanMo Status Network
    setTimeout(
        function () {
            const startTime = performance.now()
            fetch(`https://status.ymbit.cn/favicon.ico`, {
                mode: 'no-cors'
            })
                .then(response => {
                    return response.blob()
                })
                .then(_ => {
                    const endTime = performance.now()
                    // 计算延迟
                    const delay = endTime - startTime
                    setTimeout(
                        Log.bind(console, `%c YanMoStatus %c 已连接到 烟墨的状态监测 网络！`, 'color:black;background-color:#87ceeb', '')
                        , 0)
                    setTimeout(
                        Log.bind(console, `%c YanMoStatus %c 收发正常！延迟：${delay} ms`, 'color:black;background-color:#87ceeb', '')
                        , 100)
                })
                .catch(_ => {
                    setTimeout(
                        Log.bind(console, `%c YanMoStatus %c 无法连接到 烟墨的状态监测 网络！`, 'color:black;background-color:#d9534f', '')
                        , 0)
                })
        }
        , 2000)
})