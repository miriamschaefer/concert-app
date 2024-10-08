import mongoose, { Document, Schema } from 'mongoose';

// Define una interfaz para el documento de Concert
interface IConcert extends Document {
    band: string;
    date?: Date; // El campo date es opcional
}

// Define el esquema
const ConcertSchema: Schema<IConcert> = new Schema({
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
const Concert = mongoose.model<IConcert>('Concert', ConcertSchema);

export default Concert;
