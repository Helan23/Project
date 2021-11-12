module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("tutorial", {
    teamId: {
      type: Sequelize.INTEGER,
	primaryKey:true
    },
    teamName: {
      type: Sequelize.STRING
    },
    
  });

  return Team;
};