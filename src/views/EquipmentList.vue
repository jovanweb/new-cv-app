<template>
    <section class="equipment">
        <h4>Equipment List</h4>  
        <div class="d-flex flex-direction-column gap-4">
            <aside>
                <ul class="list-group">
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck0" autocomplete="off" name="devices" checked>
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck0">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                All devices
                            </p>
                            <strong class="badge bg-danger">200</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck1" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck1">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                Computer
                            </p>
                            <strong class="badge bg-danger">20</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck2" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck2">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                Monitor
                            </p>
                            <strong class="badge bg-danger">20</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck3" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck3">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                Laptop
                            </p>
                            <strong class="badge bg-danger">20</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck4" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck4">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                Keyboard
                            </p>
                            <strong class="badge bg-danger">20</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck5" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck5">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                Mouse
                            </p>
                            <strong class="badge bg-danger">20</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck6" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck6">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                Printer
                            </p>
                            <strong class="badge bg-danger">20</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck7" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck7">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                TV
                            </p>
                            <strong class="badge bg-danger">2</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck8" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck8">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                Test devices
                            </p>
                            <strong class="badge bg-danger">20</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck9" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck9">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                Chair
                            </p>
                            <strong class="badge bg-danger">2</strong>
                        </label>
                    </li>
                    <li class="list-group-item p-1 rounded-0">
                        <input type="radio" class="btn-check" id="btncheck10" autocomplete="off" name="devices">
                        <label class="btn btn-outline-success rounded-0 justify-content-between" for="btncheck10">
                            <p class="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" fill="#fff" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32 8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4c6.2-6.27 14.4-9.4 22.6-9.4 17.1 0 32 13.7 32 32z"/></svg>
                                </span>
                                Table
                            </p>
                            <strong class="badge bg-danger">2</strong>
                        </label>
                    </li>
                </ul>


                





            </aside> 
            <article>
                <div class="d-flex justify-content-end mb-2">
                    <div class="input-group w-25">
                        <input class="form-control form-control mb-0" type="text" placeholder="Search device..." >
                        <button class="btn btn-success" type="button" id="button-addon2">Search</button>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-hover border-top">
                        <thead>
                            <tr>
                                <th>Numb</th>
                                <th>Code</th>
                                <th>Configuration</th>
                                <th>Softver</th>
                                <th>Description</th>
                                <th>Date of acquisition</th>
                                <th>Price</th>
                                <th>User</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>105 - BWL</td>
                                <td>23-RN002001119</td>
                                <td></td>
                                <td></td>
                                <td>HP PAVILION 15-EH2019NM 79K31EA WINDOWS 10 PRO</td>
                                <td>2023-10-23</td>
                                <td>85666.67</td>
                                <td>inventar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </article>
        </div>

    </section>
</template>
<script>
export default {
    name: "EquipmentList",
}
</script>
<style lang="scss" scoped>
    .equipment {
        padding: 30px 20px;

        aside {
            flex: 0 0 250px;
        }

        article {
            width: 100%;
        }
    }

    .btn-check:checked + .btn {
        span {
            border-color: #fff;
            svg {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    .btn-group {
        width: 100%;
        overflow: auto;
    }

    .btn {
        display: flex;
        align-items: center;
        gap:10px;
        white-space: nowrap;
        span {
            display: flex;
            width: 20px;
            height: 20px;
            border-radius: 5px;
            border: 2px solid #bababa;
            transition: all .3s ease;
            
            svg {
                transform: translate(1.5px, 0);
                transition: all .3s ease;
                visibility: hidden;
                opacity: 0;
            }
        }

        .badge {
            transform: translate(0,1px);
        }
    }
</style>