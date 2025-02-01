import express, { Request, Response } from "express";
import * as grpc from "@grpc/grpc-js";
import { CreateUserRequest, GetUserRequest } from "./generated-proto/user_pb";
import { UserServiceClient } from "./generated-proto/user_grpc_pb";

const app = express();
const port = 3005;

app.use(express.json());

app.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body;
  const client = new UserServiceClient(
    "grpc-server:50051",
    grpc.credentials.createInsecure()
  );
  
  const createUserRequest = new CreateUserRequest();
  createUserRequest.setName(name);
  createUserRequest.setEmail(email);
  console.log(createUserRequest)
  client.createUser(createUserRequest, (err, user) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ error: err.message});
    }

    res.status(201).json(user.toObject());
  });
});

app.get("/users/:id", (req: Request, res: Response) => {
  const getUserRequest = new GetUserRequest();
  getUserRequest.setId(req.params.id);
  const client = new UserServiceClient(
    "grpc-server:50051",
    grpc.credentials.createInsecure()
  );
  
  client.getUser(getUserRequest, (err, fetchedUser) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(fetchedUser.toObject());
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});