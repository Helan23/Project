module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("team", {
    teamId: {
      type: Sequelize.INTEGER,
	primaryKey:true
    },
    teamName: {
      type: Sequelize.STRING
    },
Location: {
      type: Sequelize.STRING,
	primaryKey:true
    },
	  PhoneNumber: {
      type: Sequelize.INTEGER,
	primaryKey:true
    },
	  BankName: {
      type: Sequelize.STRING,
	primaryKey:true
    },
	  BranchName: {
      type: Sequelize.STRING,
	primaryKey:true
    },
	  IFSCcode: {
      type: Sequelize.INTEGER,
	primaryKey:true
    },
	  AccountNumber: {
      type: Sequelize.INTEGER,
	primaryKey:true
    }, 	  
  });

    
  });

  return Team;
};