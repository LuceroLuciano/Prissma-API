const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Cors
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  
});

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });

  app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});


/******** CRUD for the new table MissionCommander *********/

app.get('/missioncommander', async (req, res) => {
  const allMissionComanders = await prisma.missionCommander.findMany({});
  res.json(allMissionComanders)
})

app.get('/missioncommander/:id', async (req, res) => {
  const id = req.params.id;
  const missionComander = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}});
  res.json(missionComander)
})

app.post('/missioncommander', async (req, res) => {
  const missionComander = {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander,
      enrollments: req.body.enrollments
  };
  const message = 'Mission Commander creado';
  await prisma.missionCommander.create({data: missionComander});
  return res.json({message})
})

app.put('/missioncommander/:id', async(req, res) => {
  const id = parseInt(req.params.id);
  await prisma.missionCommander.update({
    where: {
      id: id
    },
    data: {
      lang: req.body.lang
    }
  })
  return res.json({message: "Actualizado correctamente"});
})

app.delete('/missioncommander/:id', async(req, res) => {
  const id = parseInt(req.params.id);
  await prisma.missionCommander.delete({where: {id:id}});
  return res.json({message: "Eliminado correctamente"})
})


/******** CRUD for the new table NewMissionCommander *********/

// endpoint GET
app.get('/newmissioncommander', async (req, res) => {
  const allNewMissionComanders = await prisma.newMissionCommander.findMany({});
  res.json(allNewMissionComanders)
});

app.get('/newmissioncommander/:id', async (req, res) => {
  const id = req.params.id;
  const newMissionCommander = await prisma.newMissionCommander.findUnique({where: {id: parseInt(id)}});
  res.json(newMissionCommander)
});

// Endpoint POST
app.post('/newmissioncommander', async (req, res) => {
  const newMissionComander = {
      name: req.body.name,
      username: req.body.username,
      mainStack: req.body.mainStack
  };
  const message = 'Mission Commander creado';
  await prisma.newMissionCommander.create({data: newMissionComander});
  return res.json({message})
})

// Enpoint PUT
app.put('/newmissioncommander/:id', async(req, res) => {
  const id = parseInt(req.params.id);
  await prisma.newMissionCommander.update({
    where: {
      id: id
    },
    data: {
      name: req.body.name,
      username: req.body.username,
      mainStack: req.body.mainStack
    }
  })
  return res.json({message: "Actualizado correctamente"});
})

// Enpoint DELETE
app.delete('/newmissioncommander/:id', async(req, res) => {
  const id = parseInt(req.params.id);
  await prisma.newMissionCommander.delete({where: {id:id}});
  return res.json({message: "Eliminado correctamente"})
})

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});