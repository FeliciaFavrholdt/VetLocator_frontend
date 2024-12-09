const tableRows = [
  // Animals Endpoints
  { method: "GET", url: "api/animals", requestBody: "", response: "[animal, animal, …] (1)", error: "(e1), (e4)", notes: "Retrieves all animals" },
  { method: "GET", url: "api/animals/{id}", requestBody: "", response: "animal (1)", error: "(e1), (e2), (e4)", notes: "Retrieves a specific animal by id" },
  { method: "GET", url: "api/animals/populate", requestBody: "", response: '{ "msg": "Data populated" }', error: "(e4)", notes: "Populates animals into DB" },
  { method: "POST", url: "api/animals", requestBody: '{ "name": "", "species": "", "age": "", "userId": "" }', response: '{ "msg": "Animal created", "animal": {...}}', error: "(e2), (e4)", notes: "Creates a new animal" },
  { method: "PUT", url: "api/animals/{id}", requestBody: '{ "name": "", "species": "", "age": "" }', response: '{ "msg": "Animal updated", "animal": {...}}', error: "(e1), (e2), (e4)", notes: "Updates animal details" },
  { method: "DELETE", url: "api/animals/{id}", requestBody: "", response: '{ "msg": "Animal deleted" }', error: "(e1), (e4)", notes: "Deletes a specific animal" },

  // Clinics Endpoints
  { method: "GET", url: "/api/clinics", requestBody: "", response: "[clinic, clinic, …] (1)", error: "(e4)", notes: "Retrieves all clinics" },
  { method: "GET", url: "/api/clinics/veterinarians", requestBody: "", response: "[veterinarian, veterinarian, …] (2)", error: "(e4)", notes: "Retrieves all veterinarians" },
  { method: "GET", url: "/api/clinics/{id}", requestBody: "", response: "clinic", error: "(e1), (e4)", notes: "Retrieves a specific clinic by id" },
  { method: "GET", url: "/api/clinics/openinghours", requestBody: "", response: "[openingHour, openingHour, …]", error: "(e4)", notes: "Retrieves clinic opening hours" },
  { method: "GET", url: "/api/clinics/populate", requestBody: "", response: '{ "msg": "Clinics populated successfully" }', error: "(e4)", notes: "Populates clinic data into DB" },
  { method: "POST", url: "/api/clinics/veterinarians/{id}", requestBody: "veterinarian (2) without id", response: '{ "msg": "Veterinarian created", "veterinarian": { ... }}', error: "(e2), (e4)", notes: "Creates a new veterinarian" },
  { method: "POST", url: "/api/clinics/{id}", requestBody: "clinic (1) without id", response: '{ "msg": "Clinic created", "clinic": { ... }}', error: "(e2), (e4)", notes: "Creates a new clinic" },
  { method: "POST", url: "/api/clinics/{id}/openinghours", requestBody: "", response: '{ "msg": "Opening hours for clinic added successfully"}', error: "(e2), (e4)", notes: "Adds opening hours to a clinic" },
  { method: "PUT", url: "/api/clinics/{id}", requestBody: '{ "name": "", "city": "" }', response: '{ "msg": "Clinic details updated successfully" }', error: "(e1), (e2), (e4)", notes: "Updates clinic details" },
  { method: "DELETE", url: "/api/clinics/veterinarians/{id}", requestBody: "", response: '{ "msg": "Veterinarian deleted successfully"}', error: "(e1), (e4)", notes: "Deletes a specific veterinarian" },
  { method: "DELETE", url: "/api/clinics/{id}", requestBody: "", response: '{ "msg": "Clinic deleted successfully"}', error: "(e1), (e4)", notes: "Deletes a specific clinic" },

  // Routes and Protected Endpoints
  { method: "GET", url: "/api/routes", requestBody: "", response: "[route, route, …]", error: "(e4)", notes: "Retrieves available routes" },
  { method: "GET", url: "/api/protected/user", requestBody: "", response: "user", error: "(e3), (e4)", notes: "Requires user-level authentication" },
  { method: "GET", url: "/api/protected/admin", requestBody: "", response: "admin", error: "(e3), (e4)", notes: "Requires admin-level authentication" },
  { method: "GET", url: "/api/protected/vet", requestBody: "", response: "vet", error: "(e3), (e4)", notes: "Requires veterinarian-level authentication" },
  { method: "GET", url: "/api/auth/test", requestBody: "", response: '{ "msg": "Test successful" }', error: "(e4)", notes: "To test the endpoint, login not needed" },
  { method: "GET", url: "/api/auth/healthcheck", requestBody: "", response: '{ "msg": "API is up and running" }', error: "(e4)", notes: "Check if API is live" },
  { method: "POST", url: "/api/auth/login", requestBody: '{ "email": "", "password": "" }', response: '{ "msg": "Login successful", "token": "..."}', error: "(e2), (e3), (e4)", notes: "Adds JWT token logic on successful login" },
  { method: "POST", url: "/api/auth/register", requestBody: '{ "fullName": "", "email": "", "password": "" }', response: '{ "msg": "User registered" }', error: "(e2), (e3), (e4)", notes: "Registers a new user" },
  { method: "POST", url: "/api/auth/user/addrole", requestBody: '{ "userId": "", "role": "" }', response: '{ "msg": "Role added" }', error: "(e2), (e3), (e4)", notes: "Adds a role to a user, requires token auth" },

  // Users Endpoints
  { method: "GET", url: "api/users", requestBody: "", response: "[user, user, …]", error: "(e4)", notes: "Retrieves all users" },
  { method: "GET", url: "api/users/{id}", requestBody: "", response: "user", error: "(e1), (e4)", notes: "Retrieves a specific user by id" },
  { method: "GET", url: "api/users/{id}/animals", requestBody: "", response: "[animal, animal, …] (1)", error: "(e1), (e4)", notes: "Retrieves animals of a user" },
  { method: "POST", url: "api/users", requestBody: '{ "fullName": "", "email": "", "phone": "" }', response: '{ "msg": "User created", "user": {...}}', error: "(e2), (e4)", notes: "Creates a new user" },
  { method: "PUT", url: "api/users/{id}", requestBody: '{ "fullName": "", "email": "", "phone": "" }', response: '{ "msg": "User updated", "user": {...}}', error: "(e1), (e2), (e4)", notes: "Updates user details" },
  { method: "DELETE", url: "api/users/{id}", requestBody: "", response: '{ "msg": "User deleted" }', error: "(e1), (e4)", notes: "Deletes a specific user and their associated animals" },
];

export default tableRows;
