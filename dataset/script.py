Names= [ 'Clay soil','Loamy soil']


from bing_image_downloader import downloader
for i in range(len(Names)):
    # print (Names[i])
    # print(i)
    downloader.download(Names[i], limit=100,  output_dir='soil', adult_filter_off=True, force_replace=False, timeout=60, verbose=True)
