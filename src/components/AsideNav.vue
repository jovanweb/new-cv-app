<template>
    <aside class="aside">
        <div class="aside__header d-flex align-items-center justify-content-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" style="background-color: #FBFBFB" width="40" viewBox="0 0 25 25" fill="none"><path fill="#5360AC" d="M9.181 16.469V6.38H6.907v12.237h5.804v-2.15h-3.53Z"/><path fill="#3AA6DE" d="M25 25H0V0h25v25ZM.946 24.052H24.05V.948H.946v23.104Z"/><path fill="#3AA6DE" d="M16.127 12.291c1.135-.505 1.592-1.417 1.592-2.361 0-2.466-1.803-3.548-4.215-3.548H9.972V8.48h3.532c1.468 0 1.921.944 1.921 1.504 0 .7-.47 1.311-1.921 1.311H9.972v2.03h3.532c.944 0 2.289.577 2.289 1.676 0 1.155-1.345 1.47-2.29 1.47v2.151c2.534 0 4.58-.874 4.58-3.602 0-.769-.525-2.29-1.957-2.727"/></svg>
            <h5 class="mb-0 text-white"><strong>Brigdewater Labs</strong></h5>
        </div>
        <div class="aside__body">
            <ul class="list-unstyled aside__nav">
                <li>
                    <router-link to="/" active-class="active">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="25"  style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd" viewBox="0 0 846.66 846.66"><path fill="currentColor" d="M91.82 580.72V142.85c0-72.81 59.49-132.3 132.3-132.3h462.04c72.81 0 132.3 59.49 132.3 132.3v485.13c0 72.81-59.5 132.3-132.3 132.3H283.6v55.19c0 11.4-9.25 20.65-20.65 20.65H48.85c-11.4 0-20.65-9.25-20.65-20.65v-214.1c0-11.4 9.25-20.65 20.65-20.65h42.97zm-5.74 141.11c-14.51-22.78 20.16-44.88 34.68-22.1l15.05 23.57 55.79-78.51c15.68-22.03 49.23 1.83 33.55 23.87l-73.49 103.37c-8.34 11.74-26.19 11.52-34.09-.87l-31.49-49.33zm691.09-161.74H380.5c-27.16 0-27.16-41.29 0-41.29h396.67V142.85c0-50.01-41-91.01-91.01-91.01H224.12c-50.01 0-91.01 41-91.01 91.01v437.87h129.84c11.4 0 20.65 9.25 20.65 20.65v117.62h402.56c50.01 0 91.01-41 91.01-91.01v-67.89zM239.12 422.95c0 27.15-41.29 27.15-41.29 0 0-59.49 33.15-113.75 85.69-141.18-17.87-18.81-27.97-43.76-27.97-69.78 0-56.03 45.43-101.46 101.46-101.46 56.03 0 101.46 45.43 101.46 101.46 0 26.02-10.1 50.97-27.97 69.78 52.54 27.43 85.69 81.69 85.69 141.18 0 27.15-41.29 27.15-41.29 0 0-53.61-36.08-100.54-87.95-114.09-9.59 2.98-19.91 4.59-29.94 4.59-10.03 0-20.36-1.61-29.94-4.59-51.87 13.55-87.95 60.48-87.95 114.09zm117.89-150.79c33.61 0 60.17-26.82 60.17-60.17 0-33.23-26.94-60.17-60.17-60.17-33.23 0-60.17 26.94-60.17 60.17 0 34.2 27.34 60.17 60.17 60.17zm208.85 172.48c-27.15 0-27.15-41.29 0-41.29h125.95c27.15 0 27.15 41.29 0 41.29H565.86zm0-121.74c-27.15 0-27.15-41.29 0-41.29h125.95c27.15 0 27.15 41.29 0 41.29H565.86zm0-121.75c-27.15 0-27.15-41.29 0-41.29h125.95c27.15 0 27.15 41.29 0 41.29H565.86zM242.31 622.01H69.49v172.81h172.82V622.01z" style="fill-rule:nonzero"/></svg>
                        CV Tables
                    </router-link>
                </li>
                <li>
                    <router-link to="day-off" active-class="active">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="25" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd" viewBox="0 0 846.66 846.66"><path  fill="currentColor" d="M130.28 100.36h35.21V55.1c0-11.43 9.28-20.71 20.71-20.71h70.42c11.43 0 20.7 9.28 20.7 20.71v45.26h292.02V55.1c0-11.43 9.27-20.71 20.71-20.71h70.41c11.43 0 20.71 9.28 20.71 20.71v45.26h35.21c66.87 0 121.51 54.64 121.51 121.52v468.87c0 66.88-54.64 121.52-121.51 121.52h-586.1c-66.87 0-121.51-54.64-121.51-121.52V221.88c0-66.88 54.64-121.52 121.51-121.52zm-16.04 447.63h84.91v84.91h-84.91v-84.91zm533.27 0h84.92v84.91h-84.92v-84.91zm-177.76 0h84.91v84.91h-84.91v-84.91zm-177.75 0h84.91v84.91H292v-84.91zM114.24 417.52h84.91v84.91h-84.91v-84.91zm533.27 0h84.92v84.91h-84.92v-84.91zm-177.76 0h84.91v84.91h-84.91v-84.91zm-177.75 0h84.91v84.91H292v-84.91zm-85.09-296.45v45.87h29V75.81h-29v45.26zm403.85 45.87h28.99V75.81h-28.99v91.13zM50.19 324.33h746.28v-34.86H50.19v34.86zm746.28 41.42H50.19v325c0 44.01 36.08 80.1 80.09 80.1h586.1c44.01 0 80.09-36.09 80.09-80.1v-325zM50.19 248.05h746.28v-26.17c0-44.01-36.08-80.1-80.09-80.1h-35.21v45.87c0 11.43-9.28 20.71-20.71 20.71h-70.41c-11.44 0-20.71-9.28-20.71-20.71v-45.87H277.32v45.87c0 11.43-9.27 20.71-20.7 20.71H186.2c-11.43 0-20.71-9.28-20.71-20.71v-45.87h-35.21c-44.01 0-80.09 36.09-80.09 80.1v26.17z" style="fill-rule:nonzero"/></svg>
                        Day Off
                    </router-link>
                </li>

                <li>
                    <router-link to="/test" active-class="active">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="25" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd" viewBox="0 0 846.66 846.66"><path  fill="currentColor" d="M130.28 100.36h35.21V55.1c0-11.43 9.28-20.71 20.71-20.71h70.42c11.43 0 20.7 9.28 20.7 20.71v45.26h292.02V55.1c0-11.43 9.27-20.71 20.71-20.71h70.41c11.43 0 20.71 9.28 20.71 20.71v45.26h35.21c66.87 0 121.51 54.64 121.51 121.52v468.87c0 66.88-54.64 121.52-121.51 121.52h-586.1c-66.87 0-121.51-54.64-121.51-121.52V221.88c0-66.88 54.64-121.52 121.51-121.52zm-16.04 447.63h84.91v84.91h-84.91v-84.91zm533.27 0h84.92v84.91h-84.92v-84.91zm-177.76 0h84.91v84.91h-84.91v-84.91zm-177.75 0h84.91v84.91H292v-84.91zM114.24 417.52h84.91v84.91h-84.91v-84.91zm533.27 0h84.92v84.91h-84.92v-84.91zm-177.76 0h84.91v84.91h-84.91v-84.91zm-177.75 0h84.91v84.91H292v-84.91zm-85.09-296.45v45.87h29V75.81h-29v45.26zm403.85 45.87h28.99V75.81h-28.99v91.13zM50.19 324.33h746.28v-34.86H50.19v34.86zm746.28 41.42H50.19v325c0 44.01 36.08 80.1 80.09 80.1h586.1c44.01 0 80.09-36.09 80.09-80.1v-325zM50.19 248.05h746.28v-26.17c0-44.01-36.08-80.1-80.09-80.1h-35.21v45.87c0 11.43-9.28 20.71-20.71 20.71h-70.41c-11.44 0-20.71-9.28-20.71-20.71v-45.87H277.32v45.87c0 11.43-9.27 20.71-20.7 20.71H186.2c-11.43 0-20.71-9.28-20.71-20.71v-45.87h-35.21c-44.01 0-80.09 36.09-80.09 80.1v26.17z" style="fill-rule:nonzero"/></svg>
                        test
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script>
export default {
    name:"AsideNav"
}
</script>
<style lang="scss" scoped>
    aside {
        position: fixed;
        left: 0;
        top: 0;
        background-color: #39A6DE;
        height: 100vh;
        width: 250px;
        z-index: 10;
    }

    .aside__header {
        height: 60px;
        background-color:darken(#39A6DE, 15%);
    }

    .aside__body {
        padding: 20px 0;
    }

    .aside__nav {

        a {
            color: #fff;
            font-weight: 500;
            text-decoration: none;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            transition: all .3s ease;
            font-size: 14px;

            svg {
                margin-right: 6px;
            }

            &.active {
                background-color: #fff;
                color: #39A6DE;
            }
        }
    }
</style>