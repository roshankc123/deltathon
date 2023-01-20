import time
data =  { 'Cauliflower' : [
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'First day of the planting, So please put some water, Not so much that the seedling gets blown away.',
            'endday' : 1,
            'endtime' : (1 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'Second day of the planting, So please put some water, Not so much that the seedling gets blown away.',
            'endday' : 2,
            'endtime' : (2 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'Third day of the planting, So please put some water, Not so much that the seedling gets blown away.',
            'endday' : 3,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'Been while of the planting, please put some water so that it gets proper water in regular interval.',
            'endday' : 7,
            'endtime' : (7 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Time for fertilizer',
            'subtitle' : 'This time of the planting, it needs some fertilizer. So, use fertilizer recommendation service and put fertilizer as per recommended.',
            'endday' : 14,
            'endtime' : (14 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Time for Blancing',
            'subtitle' : 'During Blancing time, you have to tie up the leaves of the cauliflower at the top so that the flower does not get',
            'endday' : 28,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Earthing Up',
            'subtitle' : 'This time of the planting is the time of earthing up, where the plants are supported with soil to avoid toppling of the plant during head formation.',
            'endday' : 30,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Time for pesticides',
            'subtitle' : 'In this time, you need to detect if your plants has any kind of diseases and if found any, you have to apply pesticides as per recommended one.',
            'endday' : 34,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Irrigation',
            'subtitle' : 'Your plants need regular irrigation, so you need to put some water on it.',
            'endday' : 40,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Irrigation',
            'subtitle' : 'Your plants need regular irrigation, so you need to put some water on it.',
            'endday' : 40,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Weeding time',
            'subtitle' : 'Weeding is the removal of weeds from the field. It is an effective pre-harvesting method of crop protection and crop production management. Please ',
            'endday' : 60,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Harvesting Up',
            'subtitle' : 'By this time, the cauliflower must be ready to be harvested up.',
            'endday' : 60,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
    ],
    'Onion' : [
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'First day of the planting, So please put some water, Not so much that the seedling gets blown away.',
            'endday' : 1,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'Seventh day of the planting, So please put some water, water is very essential for good crops.',
            'endday' : 7,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Time for Gap Filling',
            'subtitle' : 'Gap filling is done to fill the gaps by sowing of seeds or transplanting of seedlings in gap where early sown seed had not germinated.',
            'endday' : 11,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'Its been two weeks of planting, So please put some water, water is very essential for good crops.',
            'endday' : 15,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Time for fertilizer',
            'subtitle' : 'This time of the planting, it needs some fertilizer. So, use fertilizer recommendation service and put fertilizer as per recommended.',
            'endday' : 21,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Time for fertilizer',
            'subtitle' : 'This time of the planting, it needs some fertilizer. So, use fertilizer recommendation service and put fertilizer as per recommended.',
            'endday' : 35,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Time for Plant Growth Regulators',
            'subtitle' : 'Plant growth regulators (PGRs) are chemicals used to modify plant growth such as increasing branching, suppressing shoot growth, increasing return bloom, removing excess fruit, or altering fruit maturity. Consult with agri-doctors to apply best PGR.',
            'endday' : 45,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Time for fertilizer',
            'subtitle' : 'This time of the planting, it needs some fertilizer. So, use fertilizer recommendation service and put fertilizer as per recommended.',
            'endday' : 60,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },

        {
            # 'id' : '',
            'title' : 'Time for Plant Growth Regulators',
            'subtitle' : 'Plant growth regulators (PGRs) are chemicals used to modify plant growth such as increasing branching, suppressing shoot growth, increasing return bloom, removing excess fruit, or altering fruit maturity. Consult with agri-doctors to apply best PGR.',
            'endday' : 70,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Time for fertilizer',
            'subtitle' : 'This time of the planting, it needs some fertilizer. So, use fertilizer recommendation service and put fertilizer as per recommended.',
            'endday' : 80,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Time for Plant Growth Regulators',
            'subtitle' : 'Plant growth regulators (PGRs) are chemicals used to modify plant growth such as increasing branching, suppressing shoot growth, increasing return bloom, removing excess fruit, or altering fruit maturity. Consult with agri-doctors to apply best PGR.',
            'endday' : 90,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Harvesting Up',
            'subtitle' : 'By this time, the cauliflower must be ready to be harvested up.',
            'endday' : 10,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
    ],
    # },
    'Raddish': [
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'First day of the planting, So please put some water, Not so much that the seedling gets blown away.',
            'endday' : 1,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'Second day of the planting, So please put some water, Not so much that the seedling gets blown away.',
            'endday' : 2,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'Third day of the planting, So please put some water, Not so much that the seedling gets blown away.',
            'endday' : 2,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'First week of the planting, So please put some water, irrigation is most for healthy plants.',
            'endday' : 7,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Weeding time',
            'subtitle' : 'Weeding is the removal of weeds from the field. It is an effective pre-harvesting method of crop protection and crop production management. Please ',
            'endday' : 8,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            # 'id' : '',
            'title' : 'Irrigation',
            'subtitle' : 'Second week of the planting, So please put some water, irrigation is most for healthy plants.',
            'endday' : 14,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Weeding time',
            'subtitle' : 'Weeding is the removal of weeds from the field. It is an effective pre-harvesting method of crop protection and crop production management. Please ',
            'endday' : 21,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
        {
            'title' : 'Time for fertilizer',
            'subtitle' : 'This time of the planting, it needs some fertilizer. So, use fertilizer recommendation service and put fertilizer as per recommended.',
            'endday' : 30,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        } ,
        {
            'title' : 'Harvesting Up',
            'subtitle' : 'By this time, the cauliflower must be ready to be harvested up.',
            'endday' : 45,
            'endtime' : (3 * 86400) + int(time.time()),
            'is_done' : False,
            '_time' : int(time.time())
        },
    ]
}


# for temp in data['Cauliflower']:
#     # endday = int(((temp['endtime']) - int(time.time())) / 86400)   #endtime means end
#     day = int((int(time.time()) - (temp['_time'])) / 86400)
#     print(day == temp['endday']) #temp['endday'])