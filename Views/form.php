<div class="container justify-content-center">
    <div class="row justify-content-center">
        <div class="card">
            <div class="card-body">
                <form id="formulaire" method="post">
                    <div class="form-group">
                        <label for="nameCard">Nom de la carte</label>
                        <input type="text" name="nameCard" id="nameCard" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="translateCard">Langue de la carte(Par défaut : FR):</label>
                        <select name="translateCard" id="translateCard" class="form-control">
                            <option value="fr">FR</option>
                            <option value="en">EN</option>
                            <option value="de">DE</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div id="result">

        </div>
    </div>
</div>