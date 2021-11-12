module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("team", {
    teamId: {
      type: Sequelize.INTEGER,
	primaryKey:true
    },
    TeamName: {
      type: Sequelize.STRING(20)
    },
Location: {
      type: Sequelize.STRING(20)
	
    },
	  PhoneNumber: {
      type: Sequelize.INTEGER,
	
    },
	  BankName: {
      type: Sequelize.STRING(20)
	
    },
	  BranchName: {
      type: Sequelize.STRING(20)
	
    },
	  IFSCcode: {
      type: Sequelize.INTEGER,
	
    },
	  AccountNumber: {
      type: Sequelize.INTEGER,
	
    }, 	  
  });

    
  

  return Team;
};