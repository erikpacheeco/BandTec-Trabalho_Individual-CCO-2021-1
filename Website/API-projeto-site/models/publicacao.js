'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Publicacao = sequelize.define('Publicacao',{	
		id: {
			field: 'idDescricao',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        descricao: {
            field: 'descricao',
            type: DataTypes.STRING,
            allowNull: false
        },
        fkUsuarioDescricao: {
            field: 'fkUsuarioDescricao',
            type: DataTypes.INTEGER,
            allowNull: false
        }
	}, 
	{
		tableName: 'tbChat', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Publicacao;
};
