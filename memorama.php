<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <title>Memorama</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
    </head>

    <body>
        <main role="main" class="container-fluid" id="app">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">Memorama</h1>
                    <p>
                        <span class="h5">Intentos: </span>
                        {{intentos}} de 8
                    </p>
                </div>
            </div>

            <div v-for="(fila, indiceFila) in memorama" :key="indiceFila"
                class="row">
                <div :key="indiceFila+''+indiceImagen" class="col-3"
                    v-for="(imagen, indiceImagen) in fila">
                    <div class="mb-3">
                        <img @click="voltear(indiceFila, indiceImagen)"
                            :class="{'girar': imagen.mostrar}"
                            :src="(imagen.mostrar ? imagen.ruta :
                            NOMBRE_IMAGEN_OCULTA)" class="card-img-top img-fluid
                            img-thumbnail">
                    </div>
                </div>
            </div>

        </main>
        <script src="js/sweetalert2.all.min.js"></script>
        <script src="js/vue.min.js"></script>
        <script src="js/script.js"></script>
    </body>

</html>