const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Java'
        },
    });

    const woopa5 = await prisma.explorer.upsert({
        where: { name: 'Woopa 5' },
        update: {},
        create: {
          name: 'Woopa 5',
                  username: 'ajolonauta5',
                  mission: 'Java'
        },
    });


    // Agregar nuevos registros para la tabla MissionCommander
    const missionComander = await prisma.missionCommander.upsert({
        where: { name: 'Carlo' },
        update: {},
        create: {
          name: 'Carlo',
                  lang: 'NodeJS',
                  missionCommander: 'Carlo',
                  enrollments: 400
        },
    });
    
    const missionComander1 = await prisma.missionCommander.upsert({
        where: { name: 'Fer' },
        update: {},
        create: {
            name: 'Fer',
                  lang: 'Java',
                  missionCommander: 'Fer',
                  enrollments: 700
        },
    });

    const missionComander2 = await prisma.missionCommander.upsert({
        where: { name: 'Romarpla' },
        update: {},
        create: {
            name: 'Romarpla',
                lang: 'JS',
                missionCommander: 'Romarpla',
                enrollments: 1100
        },
    });

    console.log('Create 5 explorers');
    console.log('create 3 Missions Commanders')
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();