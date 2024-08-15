const { default: mongoose } = require('mongoose');
const { Schema } = mongoose;


const diffuserSchema = new Schema({
  "디퓨저 모드": Number,
  "디퓨저 목표 개도 값": Number,
  "설정 풍량": Number,
  "풍량제어 제어시간 간격": Number,
  "풍량제어 목표도달 판단기준값": Number,
  "풍량제어 디퓨저 개도 위치 조정값": Number,
  "설정온도": Number,
  "온도제어 제어시간 간격": Number,
  "현재 개도 값": Number,
  "FAN RPM": Number,
  "현재풍량": Number,
  "실내온도": Number,
  "공급 대기 온도": Number,
  "Co2농도": Number
});

const roomSchema = new Schema({
  SMD: diffuserSchema,
  SMU: diffuserSchema
});

const transmitterSchema = new Schema({
  "급기풍량": Number,
  "급기온도": Number,
  "급기Co2": Number,
  "배기풍량": Number,
  "배기온도": Number,
  "배기Co2": Number
});

const powermetterSchema = new Schema({
    "유효전력량": Number,
    "전압": Number,
    "전류": Number,
    "유효전력": Number,
})

const deviceSchema = new Schema({
  transmitter: transmitterSchema,
  powermetter: powermetterSchema,
  Room1: roomSchema,
  Room2: roomSchema,
},{ timestamps: true });

const convertToKST = date => {
    const kstOffset = 9 * 60 * 60 * 1000; // 9 hours in milliseconds
    return new Date(date.getTime() + kstOffset);
};

deviceSchema.pre('save', async function(next) {
    try {
        if (this.isNew || this.isModified()) {
            this.createdAt = convertToKST(this.createdAt);
            this.updatedAt = convertToKST(this.updatedAt);
        }
    } catch (error) {
        next();        
    }
});

deviceSchema.pre('findOneAndUpdate', async function(next) {
    try {
        this._update.updatedAt = convertToKST(new Date());        
    } catch (error) {
        next();        
    }
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
