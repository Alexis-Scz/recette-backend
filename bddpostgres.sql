
-- Création du type ENUM pour les unités de mesure
CREATE TYPE unite_mesure_enum AS ENUM ('g', 'kg', 'cuillère à soupe', 'cuillère à café', 'piece');

-- Création de la table ingredients
CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,          -- ID auto-incrémenté (utilisation de SERIAL)
    nom VARCHAR(255) NOT NULL       -- Nom obligatoire, longueur max 255
);

-- Création de la table recette
CREATE TABLE recette (
    id SERIAL PRIMARY KEY,          -- ID auto-incrémenté (utilisation de SERIAL)
    nom VARCHAR(255) NOT NULL,      -- Nom obligatoire
    mode_operatoire TEXT            -- Utilisation de TEXT pour des descriptions longues
);



-- Création de la table recipe_ingr
CREATE TABLE recipe_ingr (
    id SERIAL PRIMARY KEY,          -- ID auto-incrémenté (utilisation de SERIAL)
    id_recette INT NOT NULL,        -- Référence à la table recette
    id_ingr INT NOT NULL,           -- Référence à la table ingredients
    qte FLOAT NOT NULL,             -- Quantité obligatoire
    unite_de_mesure unite_mesure_enum NOT NULL, -- Utilisation du type ENUM pour les unités de mesure
    CONSTRAINT fk_recette FOREIGN KEY (id_recette) REFERENCES recette(id) ON DELETE CASCADE,
    CONSTRAINT fk_ingr FOREIGN KEY (id_ingr) REFERENCES ingredients(id) ON DELETE CASCADE
);


insert into recette(nom,mode_operatoire)
values ('Steack au poivre ','Tu coupes ,tu chauffes'),('Gateau','Tu touilles ,tu chauffes')

insert into ingredients(nom)
values ('Steack'),('Poivre'),('Sel'),('Oeuf'),('Farine')

-- c chatpt qu ia fait ça ? la debut oui mais pas les insert ça c moi