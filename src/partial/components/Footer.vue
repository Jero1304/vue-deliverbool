<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 d-flex flex-column justify-content-center">
                    <h3>Informazioni</h3>
                    <ul>
                        <li><a href="#">Chi siamo</a></li>
                        <li><a href="#">Termini e condizioni</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 d-flex flex-column justify-content-center">
                    <h3>Servizio clienti</h3>
                    <ul>
                        <li><a href="#">Contatti</a></li>
                        <li><a href="#">Domande frequenti</a></li>
                        <li><a href="#">Assistenza online</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 d-flex flex-column justify-content-center">
                    <h3>Social</h3>
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Footer',
};
</script>
  
<style lang="scss">
@import '../src/scss/variables.scss';

.footer {
    background-color: #f2f2f2;
    padding: 20px 0;
    background-color: $orange;
}

.footer h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.footer ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.footer ul li {
    margin-bottom: 10px;
}

.footer ul li a {
    color: #333;
    color: white !important;
    text-decoration: none;
}
</style>
  