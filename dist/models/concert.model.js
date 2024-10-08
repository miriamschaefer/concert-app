import mongoose, { Schema } from 'mongoose';
// Define el esquema
const ConcertSchema = new Schema({
    band: {
        type: String,
        required: [true, 'please, enter band name'],
    },
    date: {
        type: Date,
        required: false
    },
}, {
    timestamps: true, // Esta opción agrega createdAt y updatedAt automáticamente
});
// Crea el modelo basado en el esquema
const Concert = mongoose.model('Concert', ConcertSchema);
export default Concert;
