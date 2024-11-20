-- SQLBook: Code
-- Création de la table ingredients

CREATE TABLE ingredients (

    id INT AUTO_INCREMENT PRIMARY KEY, -- ID auto-incrémenté

    nom VARCHAR(255) NOT NULL          -- Nom obligatoire, longueur max 255

);
 
-- Création de la table recette

CREATE TABLE recette (

    id INT AUTO_INCREMENT PRIMARY KEY, -- ID auto-incrémenté

    nom VARCHAR(255) NOT NULL,         -- Nom obligatoire

    mode_operatoire TEXT               -- Utilisation de TEXT pour des descriptions longues

);
 
-- Création de la table recipe_ingr

CREATE TABLE recipe_ingr (

    id INT AUTO_INCREMENT PRIMARY KEY,       -- ID auto-incrémenté

    id_recette INT NOT NULL,                 -- Référence à la table recette

    id_ingr INT NOT NULL,                    -- Référence à la table ingredients

    qte FLOAT NOT NULL,                      -- Quantité obligatoire

    unite_de_mesure ENUM('g', 'kg', 'cuillère à soupe', 'cuillère à café') NOT NULL, -- Liste des unités de mesure

    CONSTRAINT fk_recette FOREIGN KEY (id_recette) REFERENCES recette(id) ON DELETE CASCADE,

    CONSTRAINT fk_ingr FOREIGN KEY (id_ingr) REFERENCES ingredients(id) ON DELETE CASCADE

);

 