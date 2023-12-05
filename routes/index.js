module.exports = app => {
    const discoRoutes = require("./disco.routes");
    app.use("/api/disco", discoRoutes);

    const authRoutes = require("./auth.routes");
    app.use("/api/auth", authRoutes);

    const uploadRoutes = require("./upload.routes");
    app.use("/api/upload", uploadRoutes);

    const userRoutes = require("./users.routes");
    app.use("/api/user", userRoutes);
};

