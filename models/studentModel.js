import mongoose from 'mongoose';


var schemaOptions = {
    toObject: {
      virtuals: true
    }
    ,toJSON: {
      virtuals: true
    }
  };

// MODELO
const studentSchema = mongoose.Schema({
    
  name: { type: String, required: true },
  subject: { type: String, required: true },
  type: { type: String, required: true },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error('Valor negativo para nota nÃ£o Ã© permitido');
      }
    },
  },
  lastModified: { type: Date, default: Date.now },
}, schemaOptions);

studentSchema.virtual('id').get(function() { return this._id; });

// DEFININDO O MODELO DA COLEÃ‡ÃƒO
const studentModel = mongoose.model('grades', studentSchema, 'grades');

export { studentModel };
