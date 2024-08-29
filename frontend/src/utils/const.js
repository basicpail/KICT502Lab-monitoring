
// REGISTER_MAP = {
//     'AHU_READ_HOLDING_REGISTER':[
//         {'run_mode':1,'isfloat':0,'unit_id':1}, //운전모드 제어
//         {'idf_step':3,'isfloat':0,'unit_id':1}, //외부팬 제어 addr이 3인지 4인지 확인필요
//         {'set_temp':4,'isfloat':1,'unit_id':1}, //설정온도
//         {'set_fan':5,'isfloat':0,'unit_id':1}, //팬제어 0000 -> IDF ODF COMP EEV 수동선택 순
//         {'set_idf_rpm':6,'isfloat':0,'unit_id':1}, //수동idf rpm (0~2000)
//         {'set_odf_rpm':7,'isfloat':0,'unit_id':1}, //수동 odf rpm (0~2000)
//         {'set_comp_rps':8,'isfloat':0,'unit_id':1}, //수동 comp rps (0~90)
//         {'set_eev_step':9,'isfloat':0,'unit_id':1}, //수동 eev step (0~500)
//         {'set_diffuser':10,'isfloat':0,'unit_id':1}, //수동 디퓨저 (0=자동 1=수동) (bit0: 디퓨저0)
//         {'set_diffuser0':11,'isfloat':0,'unit_id':1}, //수동 디퓨저
//         {'set_diffuser1':12,'isfloat':0,'unit_id':1}, //수동 디퓨저 
//         {'set_diffuser2':13,'isfloat':0,'unit_id':1}, //수동 디퓨저 
//         {'set_diffuser3':14,'isfloat':0,'unit_id':1}, //수동 디퓨저 
//         {'set_diffuser4':15,'isfloat':0,'unit_id':1}, //수동 디퓨저 
//         {'set_diffuser5':16,'isfloat':0,'unit_id':1}, //수동 디퓨저 
//         {'set_diffuser6':17,'isfloat':0,'unit_id':1}, //수동 디퓨저 
//         {'set_diffuser7':18,'isfloat':0,'unit_id':1}, //수동 디퓨저
//         {'set_eev_startposition_cool':20,'isfloat':0,'unit_id':1}, //초기개도 냉방(0~500)
//         {'set_eev_startholding_cool':21,'isfloat':0,'unit_id':1}, //기동보류 냉방(0~10)
//         {'set_eev_sh_cool':22,'isfloat':0,'unit_id':1}, //과열도 냉방(0~100)
//         {'set_eev_controltime_cool':23,'isfloat':0,'unit_id':1}, //제어주기 냉방(0~600)
//         {'set_eev_p_cool':24,'isfloat':0,'unit_id':1}, //P값 냉방(0~3000)
//         {'set_eev_i_cool':25,'isfloat':0,'unit_id':1}, //I값 냉방(0~600)
//         {'set_eev_startposition_heat':26,'isfloat':0,'unit_id':1}, //초기개도 난방(0~500)
//         {'set_eev_startholding_heat':27,'isfloat':0,'unit_id':1}, //기동보류 난방(0~10)
//         {'set_eev_sh_heat':28,'isfloat':0,'unit_id':1}, //과열도 난방(0~100)
//         {'set_eev_controltime_heat':29,'isfloat':0,'unit_id':1}, //제어주기 난방(0~600)
//         {'set_eev_p_heat':30,'isfloat':0,'unit_id':1}, //P값 난방(0~3000)
//         {'set_eev_i_heat':31,'isfloat':0,'unit_id':1}, //I값 난방(0~600)
//         {'set_comp_controltime':32,'isfloat':0,'unit_id':1}, //압축기 제어주기(0~120)
//         {'set_comp_changelimit':33,'isfloat':0,'unit_id':1}, //압축기 제어량(0~4)
//         {'set_damper':39,'isfloat':0,'unit_id':1}, //댐퍼 설정 (0=자동 1=수동) (bit0: Dam1 수동선택)
//         {'set_damper1':40,'isfloat':0,'unit_id':1}, //Dam1 개도값 (0~100)
//         {'set_damper2':41,'isfloat':0,'unit_id':1}, //Dam2 개도값
//         {'set_damper3':42,'isfloat':0,'unit_id':1}, //Dam3 개도값
//         {'set_damper4':43,'isfloat':0,'unit_id':1}, //Dam4 개도값
//         {'set_damper5':44,'isfloat':0,'unit_id':1}, //Dam5 개도값
//         {'set_damper6':45,'isfloat':0,'unit_id':1}, //Dam6 개도값
//         {'set_damper7':46,'isfloat':0,'unit_id':1}, //Dam7 개도값
//         {'set_damper8':47,'isfloat':0,'unit_id':1}, //Dam8 개도값
//         {'set_damper9':48,'isfloat':0,'unit_id':1}, //Dam9 개도값
//         {'set_damper10':49,'isfloat':0,'unit_id':1}, //Dam10 개도값
//         {'set_damper11':50,'isfloat':0,'unit_id':1}, //Dam11 개도값
//         {'set_damper12':51,'isfloat':0,'unit_id':1}, //Dam12 개도값
//     ],
//     'AHU_READ_INPUT_REGISTER':[
//         {'pm25_in':5,'isfloat':1,'unit_id':1}, //pm2.5
//         {'co2_in':6,'isfloat':1,'unit_id':1}, //co2
//         {'diff_pressure':7,'isfloat':1,'unit_id':1}, //토출정압
//         {'run_mode':12,'isfloat':0,'unit_id':1}, //운전모드
//         {'idf_realrpm':13,'isfloat':0,'unit_id':1}, //실내팬측정
//         {'odf_realrpm':14,'isfloat':0,'unit_id':1}, //실외팬측정
//         {'comp_setrps':15,'isfloat':0,'unit_id':1}, //압축기 목표회전수
//         {'comp_realrps':16,'isfloat':0,'unit_id':1}, //압축기 현재회전수
//         {'eev_real':17,'isfloat':0,'unit_id':1}, //EEV 현재값측정
//         {'temp_out':19,'isfloat':1,'unit_id':1}, //외기온도
//         {'temp_discharge':20,'isfloat':1,'unit_id':1}, //토출온도
//         {'temp_suction':21,'isfloat':1,'unit_id':1}, //흡입온도
//         {'temp_cond':22,'isfloat':1,'unit_id':1}, //응축온도
//         {'temp_in':23,'isfloat':1,'unit_id':1}, //실내온도
//         {'temp_eva':24,'isfloat':1,'unit_id':1}, //증발온도
//         {'dc_voltage':25,'isfloat':0,'unit_id':1}, //직류전압
//         {'ac_current':26,'isfloat':1,'unit_id':1}, //교류전압
//         {'temp_ipm':27,'isfloat':1,'unit_id':1}, //IPM온도
//         {'comp_err':28,'isfloat':0,'unit_id':1}, //comp 에러
//         {'comp_trip':29,'isfloat':0,'unit_id':1}, //comp 트립
//         // {'temp_set':35,'isfloat':1,'unit_id':1}, //설정온도
//     ],
//     'READ_UDP_REGISTER':[
//         {'ahu_supply':10,'isfloat':0},
//         {'ahu_vent':11,'isfloat':0},
//         {'supply_living1':0,'isfloat':0},//living1
//         {'vent_living1':6,'isfloat':0},
//         {'supply_living2':1,'isfloat':0},//living2
//         {'vent_living2':7,'isfloat':0},
//         {'supply_bedroom1':5,'isfloat':0},//bedroom1
//         {'vent_bedroom1':4,'isfloat':0},
//         {'supply_bedroom2':2,'isfloat':0},//bedroom2
//         {'vent_bedroom2':8,'isfloat':0},
//         {'supply_bedroom3':3,'isfloat':0},//bedroom3
//         {'vent_bedroom3':9,'isfloat':0}
//     ],
//     'DIFFUSER_READ_HOLDING_REGISTER':[
//         {'set_diffuser_supply_living1':7,'isfloat':0, 'unit_id':2},
//         {'set_diffuser_supply_living2':7,'isfloat':0, 'unit_id':3},
//         {'set_diffuser_supply_bedroom1':7,'isfloat':0, 'unit_id':6},
//         {'set_diffuser_supply_bedroom2':7,'isfloat':0, 'unit_id':4},
//         {'set_diffuser_supply_bedroom3':7,'isfloat':0, 'unit_id':5},
//         {'set_diffuser_vent_living1':7,'isfloat':0, 'unit_id':7},
//         {'set_diffuser_vent_living2':7,'isfloat':0, 'unit_id':8},
//         {'set_diffuser_vent_bedroom1':7,'isfloat':0, 'unit_id':11},
//         {'set_diffuser_vent_bedroom2':7,'isfloat':0, 'unit_id':9},
//         {'set_diffuser_vent_bedroom3':7,'isfloat':0, 'unit_id':10},
//     ],
//     'DIFFUSER_READ_INPUT_REGISTER':[
//         {'diffuser_supply_living1':7,'isfloat':0, 'unit_id':2},
//         {'diffuser_supply_living2':7,'isfloat':0, 'unit_id':3},
//         {'diffuser_supply_bedroom1':7,'isfloat':0, 'unit_id':6},
//         {'diffuser_supply_bedroom2':7,'isfloat':0, 'unit_id':4},
//         {'diffuser_supply_bedroom3':7,'isfloat':0, 'unit_id':5},
//         {'diffuser_vent_living1':7,'isfloat':0, 'unit_id':7},
//         {'diffuser_vent_living2':7,'isfloat':0, 'unit_id':8},
//         {'diffuser_vent_bedroom1':7,'isfloat':0, 'unit_id':11},
//         {'diffuser_vent_bedroom2':7,'isfloat':0, 'unit_id':9},
//         {'diffuser_vent_bedroom3':7,'isfloat':0, 'unit_id':10},
//     ],
//     'DIFFUSER_WRITE_COIL':[
//         {'set_rdopen_living1':1,'isfloat':0,'unit_id':2},
//         {'set_rdclose_living1':2,'isfloat':0,'unit_id':2},
//         {'set_rdopen_living2':1,'isfloat':0,'unit_id':3},
//         {'set_rdclose_living2':2,'isfloat':0,'unit_id':3},
//         {'set_rdopen_bedroom1':1,'isfloat':0,'unit_id':6},
//         {'set_rdclose_bedroom1':2,'isfloat':0,'unit_id':6},
//         {'set_rdopen_bedroom2':1,'isfloat':0,'unit_id':4},
//         {'set_rdclose_bedroom2':2,'isfloat':0,'unit_id':4},
//         {'set_rdopen_bedroom3':1,'isfloat':0,'unit_id':5},
//         {'set_rdclose_bedroom3':2,'isfloat':0,'unit_id':5},
//         {'set_sdopen_living1':1,'isfloat':0,'unit_id':7},
//         {'set_sdclose_living1':2,'isfloat':0,'unit_id':7},
//         {'set_sdopen_living2':1,'isfloat':0,'unit_id':8},
//         {'set_sdclose_living2':2,'isfloat':0,'unit_id':8},
//         {'set_sdopen_bedroom1':1,'isfloat':0,'unit_id':11},
//         {'set_sdclose_bedroom1':2,'isfloat':0,'unit_id':11},
//         {'set_sdopen_bedroom2':1,'isfloat':0,'unit_id':9},
//         {'set_sdclose_bedroom2':2,'isfloat':0,'unit_id':9},
//         {'set_sdopen_bedroom3':1,'isfloat':0,'unit_id':10},
//         {'set_sdclose_bedroom3':2,'isfloat':0,'unit_id':10},
//     ],
//     'SMU_LIVING1_READ_HOLDING_REGISTER':[
//         {'smu_set_mode_living1':0,'isfloat':0,'unit_id':1},
//         {'smu_set_position_living1':7,'isfloat':0,'unit_id':1},
//         {'smu_set_volume_living1':10,'isfloat':0,'unit_id':1},
//         {'smu_set_volume_controltime_living1':13,'isfloat':0,'unit_id':1},
//         {'smu_set_volume_ref_living1':14,'isfloat':0,'unit_id':1},
//         {'smu_set_volume_diff_living1':15,'isfloat':0,'unit_id':1},
//         {'smu_set_temp_living1':20,'isfloat':0,'unit_id':1},
//         {'smu_set_temp_controltime_living1':21,'isfloat':0,'unit_id':1},
//     ],
//     'SMU_LIVING2_READ_HOLDING_REGISTER':[
//         {'smu_set_mode_living2':0,'isfloat':0,'unit_id':2},
//         {'smu_set_position_living2':7,'isfloat':0,'unit_id':2},
//         {'smu_set_volume_living2':10,'isfloat':0,'unit_id':2},
//         {'smu_set_volume_controltime_living2':13,'isfloat':0,'unit_id':2},
//         {'smu_set_volume_ref_living2':14,'isfloat':0,'unit_id':2},
//         {'smu_set_volume_diff_living2':15,'isfloat':0,'unit_id':2},
//         {'smu_set_temp_living2':20,'isfloat':0,'unit_id':2},
//         {'smu_set_temp_controltime_living2':21,'isfloat':0,'unit_id':2},
//     ],
//     'SMU_LIVING1_READ_INPUT_REGISTER':[
//         {'smu_current_position_living1':7,'isfloat':0,'unit_id':1},
//         {'smu_rpm_living1':8,'isfloat':0,'unit_id':1},
//         {'smu_volume_living1':9,'isfloat':0,'unit_id':1},
//         {'smu_temp_in_living1':10,'isfloat':0,'unit_id':1},
//         {'smu_temp_supply_living1':11,'isfloat':0,'unit_id':1},
//         {'smu_co2_living1':12,'isfloat':0,'unit_id':1},
//     ],
//     'SMU_LIVING2_READ_INPUT_REGISTER':[
//         {'smu_current_position_living2':7,'isfloat':0,'unit_id':2},
//         {'smu_rpm_living2':8,'isfloat':0,'unit_id':2},
//         {'smu_volume_living2':9,'isfloat':0,'unit_id':2},
//         {'smu_temp_in_living2':10,'isfloat':0,'unit_id':2},
//         {'smu_temp_supply_living2':11,'isfloat':0,'unit_id':2},
//         {'smu_co2_living2':12,'isfloat':0,'unit_id':2},
//     ]
// }



const dataList = {
    "운전 모드": "run_mode",
    "온도 설정값": "set_temp",
    "실내팬 설정값": "set_idf_rpm",
    "실외팬 설정값": "set_odf_rpm",
    "COMP 설정값": "set_comp_rps",
    "EEV 설정값": "set_eev_step",
    "EEV 냉방 초기개도 설정값": "set_eev_startposition_cool",
    "EEV 냉방 기동보류 설정값": "set_eev_startholding_cool",
    "EEV 냉방 과열도 설정값": "set_eev_sh_cool",
    "EEV 냉방 제어주기 설정값": "set_eev_controltime_cool",
    "EEV 냉방 P값 설정값": "set_eev_p_cool",
    "EEV 냉방 I값 설정값": "set_eev_i_cool",
    "EEV 난방 초기개도 설정값": "set_eev_startposition_heat",
    "EEV 난방 기동보류 설정값": "set_eev_startholding_heat",
    "EEV 난방 과열도 설정값": "set_eev_sh_heat",
    "EEV 난방 제어주기 설정값": "set_eev_controltime_heat",
    "EEV 난방 P값 설정값": "set_eev_p_heat",
    "EEV 난방 I값 설정값": "set_eev_i_heat",
    "압축기 제어주기 설정값": "set_comp_controltime",
    "압축기 제어량 설정값": "set_comp_changelimit",
    "댐퍼1": "set_damper1",
    "댐퍼2": "set_damper2",
    "댐퍼3": "set_damper3",
    "댐퍼4": "set_damper4",
    "댐퍼5": "set_damper5",
    "댐퍼6": "set_damper6",
    "댐퍼7": "set_damper7",
    "댐퍼8": "set_damper8",
    "댐퍼9": "set_damper9",
    "댐퍼10": "set_damper10",
    "댐퍼11": "set_damper11",
    "댐퍼12": "set_damper12",
    "실내 PM2.5값": "pm25_in",
    "실내 CO2값": "co2_in",
    "토출정압": "diff_pressure",
    "실내팬 측정값": "idf_realrpm",
    "실외팬 측정값": "odf_realrpm",
    "압축기 설정값": "comp_setrps",
    "압축기 측정값": "comp_realrps",
    "EEV 측정값": "eev_real",
    "외기 온도": "temp_out",
    "토출 온도": "temp_discharge",
    "흡입 온도": "temp_suction",
    "응축 온도": "temp_cond",
    "실내 온도": "temp_in",
    "증발 온도": "temp_eva",
    "직류 전압": "dc_voltage",
    "교류 전류": "ac_current",
    "IMP 온도": "temp_ipm",
    "압축기 에러": "comp_err",
    "압축기 트립": "comp_trip",
    "디퓨저 거실1 급기 설정값": "set_diffuser_supply_living1",
    "디퓨저 거실2 급기 설정값": "set_diffuser_supply_living2",
    "디퓨저 침실1 급기 설정값": "set_diffuser_supply_bedroom1",
    "디퓨저 침실2 급기 설정값": "set_diffuser_supply_bedroom2",
    "디퓨저 침실3 급기 설정값": "set_diffuser_supply_bedroom3",
    "디퓨저 거실1 환기 설정값": "set_diffuser_vent_living1",
    "디퓨저 거실2 환기 설정값": "set_diffuser_vent_living2",
    "디퓨저 침실1 환기 설정값": "set_diffuser_vent_bedroom1",
    "디퓨저 침실2 환기 설정값": "set_diffuser_vent_bedroom2",
    "디퓨저 침실3 환기 설정값": "set_diffuser_vent_bedroom3",
    "디퓨저 거실1 급기 현재값": "diffuser_supply_living1",
    "디퓨저 거실2 급기 현재값": "diffuser_supply_living2",
    "디퓨저 침실1 급기 현재값": "diffuser_supply_bedroom1",
    "디퓨저 침실2 급기 현재값": "diffuser_supply_bedroom2",
    "디퓨저 침실3 급기 현재값": "diffuser_supply_bedroom3",
    "디퓨저 거실1 환기 현재값": "diffuser_vent_living1",
    "디퓨저 거실2 환기 현재값": "diffuser_vent_living2",
    "디퓨저 침실1 환기 현재값": "diffuser_vent_bedroom1",
    "디퓨저 침실2 환기 현재값": "diffuser_vent_bedroom2",
    "디퓨저 침실3 환기 현재값": "diffuser_vent_bedroom3",
    "공조기 급기 풍량": "ahu_supply",
    "공조기 환기 풍량": "ahu_vent",
    "거실1 급기 풍량": "supply_living1",
    "거실1 환기 풍량": "vent_living1",
    "거실2 급기 풍량": "supply_living2",
    "거실2 환기 풍량": "vent_living2",
    "침실1 급기 풍량": "supply_bedroom1",
    "침실1 환기 풍량": "vent_bedroom1",
    "침실2 급기 풍량": "supply_bedroom2",
    "침실2 환기 풍량": "vent_bedroom2",
    "침실3 급기 풍량": "supply_bedroom3",
    "침실3 환기 풍량": "vent_bedroom3",
    "SMU 거실1 모드": "smu_set_mode_living1",
    "SMU 거실1 목표 개도값": "smu_set_position_living1",
    "SMU 거실1 설정 풍량": "smu_set_volume_living1",
    "SMU 거실1 풍량제어 제어시간 간격": "smu_set_volume_controltime_living1",
    "SMU 거실1 풍량제어 목표도달 판단 기준값": "smu_set_volume_ref_living1",
    "SMU 거실1 풍량제어 개도 위치 조정값": "smu_set_volume_diff_living1",
    "SMU 거실1 설정 온도":"smu_set_temp_living1",
    "SMU 거실1 온도제어 제어시간 간격":"smu_set_temp_controltime_living1",
    "SMU 거실1 현재 개도값":"smu_current_position_living1",
    "SMU 거실1 FAN RPM":"smu_rpm_living1",
    "SMU 거실1 현재 풍량":"smu_volume_living1",
    "SMU 거실1 실내 온도":"smu_temp_in_living1",
    "SMU 거실1 공급 대기 온도":"smu_temp_supply_living1",
    "SMU 거실1 CO2 농도":"smu_co2_living1",
    "SMU 거실2 모드": "smu_set_mode_living2",
    "SMU 거실2 목표 개도값": "smu_set_position_living2",
    "SMU 거실2 설정 풍량": "smu_set_volume_living2",
    "SMU 거실2 풍량제어 제어시간 간격": "smu_set_volume_controltime_living2",
    "SMU 거실2 풍량제어 목표도달 판단 기준값": "smu_set_volume_ref_living2",
    "SMU 거실2 풍량제어 개도 위치 조정값": "smu_set_volume_diff_living2",
    "SMU 거실2 설정 온도":"smu_set_temp_living2",
    "SMU 거실2 온도제어 제어시간 간격":"smu_set_temp_controltime_living2",
    "SMU 거실2 현재 개도값":"smu_current_position_living2",
    "SMU 거실2 FAN RPM":"smu_rpm_living2",
    "SMU 거실2 현재 풍량":"smu_volume_living2",
    "SMU 거실2 실내 온도":"smu_temp_in_living2",
    "SMU 거실2 공급 대기 온도":"smu_temp_supply_living2",
    "SMU 거실2 CO2 농도":"smu_co2_living2"
  };


  export default dataList;