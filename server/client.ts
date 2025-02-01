// import * as grpc from "@grpc/grpc-js";
// import { CreateUserRequest, GetUserRequest } from "../generated-proto/user_pb";
// import { UserServiceClient } from "../generated-proto/user_grpc_pb";

// const client = new UserServiceClient(
//   "localhost:50051",
//   grpc.credentials.createInsecure()
// );


// const createUserRequest = new CreateUserRequest();
// createUserRequest.setName("John Doe");
// createUserRequest.setEmail("john.doe@example.com");

// client.createUser(createUserRequest, (err, user) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Created User:", user.toObject());
//   const getUserRequest = new GetUserRequest();
//   getUserRequest.setId(user.getId());

//   client.getUser(getUserRequest, (err, fetchedUser) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Fetched User:", fetchedUser.toObject());
//   });
// });