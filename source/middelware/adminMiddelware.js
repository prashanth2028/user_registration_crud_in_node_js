class AdminMiddleware {

    async AdminMiddleware(req, res, next) {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ msg: 'Access denied. Admins only.' });
        }
        next();
    }
}

export default new AdminMiddleware();