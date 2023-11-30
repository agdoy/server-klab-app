module.exports = app => {

    const discoRoutes = require("./disco.routes")
    app.use("/api/disco", discoRoutes);

    const authRoutes = require("./auth.routes");
    app.use("/api/auth", authRoutes);

}

