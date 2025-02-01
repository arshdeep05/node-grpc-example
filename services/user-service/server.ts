import * as grpc from "@grpc/grpc-js";
import { User, CreateUserRequest, GetUserRequest } from "./generated-proto/user_pb";
import { UserServiceService } from "./generated-proto/user_grpc_pb";


const users: User[] = [];

interface IUserServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createUser: grpc.MethodDefinition<CreateUserRequest, User>;
  getUser: grpc.MethodDefinition<GetUserRequest, User>;
}



function createUser(
  call: grpc.ServerUnaryCall<CreateUserRequest, User>,
  callback: grpc.sendUnaryData<User>
) {
  const request = call.request;
  console.log(request.getName())
  const user = new User();
  user.setId(String(users.length + 1));
  user.setName(request.getName());
  user.setEmail(request.getEmail());
  users.push(user);
  callback(null, user);
}

function getUser(
  call: grpc.ServerUnaryCall<GetUserRequest, User>,
  callback: grpc.sendUnaryData<User>
) {
  const request = call.request;
  console.log(request)
  const userId = request.getId();


  const user = users.find((u) => u.getId() === userId);

  if (!user) {
    callback(new Error("User not found"), null);
    return;
  }


  callback(null, user);
}


function main() {
  const server = new grpc.Server();

 
  server.addService(UserServiceService, { createUser, getUser });

  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log("Server running on port 50051");
    }
  );
}

main();