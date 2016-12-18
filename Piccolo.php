<?php

/**
 * Created by PhpStorm.
 * User: Zesa
 * Date: 12/15/2016
 * Time: 4:04 PM
 */
class Piccolo
{

    private $filetypes = array (
        'application/x-authorware-bin' => '.aab',
        'application/x-authorware-map' => '.aam',
        'application/x-authorware-seg' => '.aas',
        'text/vnd.abc' => '.abc',
        'video/animaflex' => '.afl',
        'application/x-aim' => '.aim',
        'text/x-audiosoft-intra' => '.aip',
        'application/x-navi-animation' => '.ani',
        'application/x-nokia-9000-communicator-add-on-software' => '.aos',
        'application/mime' => '.aps',
        'application/arj' => '.arj',
        'image/x-jg' => '.art',
        'text/asp' => '.asp',
        'application/x-mplayer2' => '.asx',
        'video/x-ms-asf-plugin' => '.asx',
        'audio/x-au' => '.au',
        'application/x-troff-msvideo' => '.avi',
        'video/avi' => '.avi',
        'video/msvideo' => '.avi',
        'video/x-msvideo' => '.avi',
        'video/avs-video' => '.avs',
        'application/x-bcpio' => '.bcpio',
        'application/mac-binary' => '.bin',
        'application/macbinary' => '.bin',
        'application/x-binary' => '.bin',
        'application/x-macbinary' => '.bin',
        'image/x-windows-bmp' => '.bmp',
        'application/x-bzip' => '.bz',
        'application/vnd.ms-pki.seccat' => '.cat',
        'application/clariscad' => '.ccad',
        'application/x-cocoa' => '.cco',
        'application/cdf' => '.cdf',
        'application/x-cdf' => '.cdf',
        'application/java' => '.class',
        'application/java-byte-code' => '.class',
        'application/x-java-class' => '.class',
        'application/x-cpio' => '.cpio',
        'application/mac-compactpro' => '.cpt',
        'application/x-compactpro' => '.cpt',
        'application/x-cpt' => '.cpt',
        'application/pkcs-crl' => '.crl',
        'application/pkix-crl' => '.crl',
        'application/x-x509-user-cert' => '.crt',
        'application/x-csh' => '.csh',
        'text/x-script.csh' => '.csh',
        'application/x-pointplus' => '.css',
        'text/css' => '.css',
        'application/x-deepv' => '.deepv',
        'video/dl' => '.dl',
        'video/x-dl' => '.dl',
        'application/commonground' => '.dp',
        'application/drafting' => '.drw',
        'application/x-dvi' => '.dvi',
        'drawing/x-dwf (old)' => '.dwf',
        'model/vnd.dwf' => '.dwf',
        'application/acad' => '.dwg',
        'application/dxf' => '.dxf',
        'text/x-script.elisp' => '.el',
        'application/x-bytecode.elisp (compiled elisp)' => '.elc',
        'application/x-elc' => '.elc',
        'application/x-esrehber' => '.es',
        'text/x-setext' => '.etx',
        'application/envoy' => '.evy',
        'application/vnd.fdf' => '.fdf',
        'application/fractals' => '.fif',
        'image/fif' => '.fif',
        'video/fli' => '.fli',
        'video/x-fli' => '.fli',
        'text/vnd.fmi.flexstor' => '.flx',
        'video/x-atomic3d-feature' => '.fmf',
        'image/vnd.fpx' => '.fpx',
        'image/vnd.net-fpx' => '.fpx',
        'application/freeloader' => '.frl',
        'image/g3fax' => '.g3',
        'image/gif' => '.gif',
        'video/gl' => '.gl',
        'video/x-gl' => '.gl',
        'application/x-gsp' => '.gsp',
        'application/x-gss' => '.gss',
        'application/x-gtar' => '.gtar',
        'multipart/x-gzip' => '.gzip',
        'application/x-hdf' => '.hdf',
        'text/x-script' => '.hlb',
        'application/hlp' => '.hlp',
        'application/x-winhelp' => '.hlp',
        'application/binhex' => '.hqx',
        'application/binhex4' => '.hqx',
        'application/mac-binhex' => '.hqx',
        'application/mac-binhex40' => '.hqx',
        'application/x-binhex40' => '.hqx',
        'application/x-mac-binhex40' => '.hqx',
        'application/hta' => '.hta',
        'text/x-component' => '.htc',
        'text/webviewhtml' => '.htt',
        'x-conference/x-cooltalk' => '.ice ',
        'image/x-icon' => '.ico',
        'application/x-ima' => '.ima',
        'application/x-httpd-imap' => '.imap',
        'application/inf' => '.inf ',
        'application/x-internett-signup' => '.ins',
        'application/x-ip2' => '.ip ',
        'video/x-isvideo' => '.isu',
        'audio/it' => '.it',
        'application/x-inventor' => '.iv',
        'i-world/i-vrml' => '.ivr',
        'application/x-livescreen' => '.ivy',
        'audio/x-jam' => '.jam ',
        'application/x-java-commerce' => '.jcm ',
        'image/x-jps' => '.jps',
        'application/x-javascript' => '.js ',
        'image/jutvision' => '.jut',
        'music/x-karaoke' => '.kar',
        'application/x-ksh' => '.ksh',
        'text/x-script.ksh' => '.ksh',
        'audio/x-liveaudio' => '.lam',
        'application/lha' => '.lha',
        'application/x-lha' => '.lha',
        'application/x-lisp' => '.lsp ',
        'text/x-script.lisp' => '.lsp ',
        'text/x-la-asf' => '.lsx',
        'application/x-lzh' => '.lzh',
        'application/lzx' => '.lzx',
        'application/x-lzx' => '.lzx',
        'text/x-m' => '.m',
        'audio/x-mpequrl' => '.m3u ',
        'application/x-troff-man' => '.man',
        'application/x-navimap' => '.map',
        'application/mbedlet' => '.mbd',
        'application/x-magic-cap-package-1.0' => '.mc$',
        'application/mcad' => '.mcd',
        'application/x-mathcad' => '.mcd',
        'image/vasa' => '.mcf',
        'text/mcf' => '.mcf',
        'application/netmc' => '.mcp',
        'application/x-troff-me' => '.me ',
        'application/x-frame' => '.mif',
        'application/x-mif' => '.mif',
        'www/mime' => '.mime ',
        'audio/x-vnd.audioexplosion.mjuicemediafile' => '.mjf',
        'video/x-motion-jpeg' => '.mjpg ',
        'application/x-meme' => '.mm',
        'audio/mod' => '.mod',
        'audio/x-mod' => '.mod',
        'audio/x-mpeg' => '.mp2',
        'video/x-mpeq2a' => '.mp2',
        'audio/mpeg3' => '.mp3',
        'audio/x-mpeg-3' => '.mp3',
        'application/vnd.ms-project' => '.mpp',
        'application/marc' => '.mrc',
        'application/x-troff-ms' => '.ms',
        'application/x-vnd.audioexplosion.mzz' => '.mzz',
        'application/vnd.nokia.configuration-message' => '.ncm',
        'application/x-mix-transfer' => '.nix',
        'application/x-conference' => '.nsc',
        'application/x-navidoc' => '.nvd',
        'application/oda' => '.oda',
        'application/x-omc' => '.omc',
        'application/x-omcdatamaker' => '.omcd',
        'application/x-omcregerator' => '.omcr',
        'text/x-pascal' => '.p',
        'application/pkcs10' => '.p10',
        'application/x-pkcs10' => '.p10',
        'application/pkcs-12' => '.p12',
        'application/x-pkcs12' => '.p12',
        'application/x-pkcs7-signature' => '.p7a',
        'application/x-pkcs7-certreqresp' => '.p7r',
        'application/pkcs7-signature' => '.p7s',
        'text/pascal' => '.pas',
        'image/x-portable-bitmap' => '.pbm ',
        'application/vnd.hp-pcl' => '.pcl',
        'application/x-pcl' => '.pcl',
        'image/x-pict' => '.pct',
        'image/x-pcx' => '.pcx',
        'application/pdf' => '.pdf',
        'audio/make.my.funk' => '.pfunk',
        'image/x-portable-graymap' => '.pgm',
        'image/x-portable-greymap' => '.pgm',
        'application/x-newton-compatible-pkg' => '.pkg',
        'application/vnd.ms-pki.pko' => '.pko',
        'text/x-script.perl' => '.pl',
        'application/x-pixclscript' => '.plx',
        'text/x-script.perl-module' => '.pm',
        'application/x-portable-anymap' => '.pnm',
        'image/x-portable-anymap' => '.pnm',
        'model/x-pov' => '.pov',
        'image/x-portable-pixmap' => '.ppm',
        'application/powerpoint' => '.ppt',
        'application/x-mspowerpoint' => '.ppt',
        'application/x-freelance' => '.pre',
        'paleovu/x-pv' => '.pvu',
        'text/x-script.phyton' => '.py ',
        'applicaiton/x-bytecode.python' => '.pyc ',
        'audio/vnd.qcelp' => '.qcp ',
        'video/x-qtc' => '.qtc',
        'audio/x-realaudio' => '.ra',
        'application/x-cmu-raster' => '.ras',
        'image/x-cmu-raster' => '.ras',
        'text/x-script.rexx' => '.rexx ',
        'image/vnd.rn-realflash' => '.rf',
        'image/x-rgb' => '.rgb ',
        'application/vnd.rn-realmedia' => '.rm',
        'audio/mid' => '.rmi',
        'application/ringing-tones' => '.rng',
        'application/vnd.nokia.ringing-tone' => '.rng',
        'application/vnd.rn-realplayer' => '.rnx ',
        'image/vnd.rn-realpix' => '.rp ',
        'text/vnd.rn-realtext' => '.rt',
        'application/x-rtf' => '.rtf',
        'video/vnd.rn-realvideo' => '.rv',
        'audio/s3m' => '.s3m ',
        'application/x-lotusscreencam' => '.scm',
        'text/x-script.guile' => '.scm',
        'text/x-script.scheme' => '.scm',
        'video/x-scm' => '.scm',
        'application/sdp' => '.sdp ',
        'application/x-sdp' => '.sdp ',
        'application/sounder' => '.sdr',
        'application/sea' => '.sea',
        'application/x-sea' => '.sea',
        'application/set' => '.set',
        'application/x-sh' => '.sh',
        'text/x-script.sh' => '.sh',
        'audio/x-psid' => '.sid',
        'application/x-sit' => '.sit',
        'application/x-stuffit' => '.sit',
        'application/x-seelogo' => '.sl ',
        'audio/x-adpcm' => '.snd',
        'application/solids' => '.sol',
        'application/x-pkcs7-certificates' => '.spc ',
        'application/futuresplash' => '.spl',
        'application/streamingmedia' => '.ssm ',
        'application/vnd.ms-pki.certstore' => '.sst',
        'application/sla' => '.stl',
        'application/vnd.ms-pki.stl' => '.stl',
        'application/x-navistyle' => '.stl',
        'application/x-sv4cpio' => '.sv4cpio',
        'application/x-sv4crc' => '.sv4crc',
        'x-world/x-svr' => '.svr',
        'application/x-shockwave-flash' => '.swf',
        'application/x-tar' => '.tar',
        'application/toolbook' => '.tbk',
        'application/x-tcl' => '.tcl',
        'text/x-script.tcl' => '.tcl',
        'text/x-script.tcsh' => '.tcsh',
        'application/x-tex' => '.tex',
        'application/plain' => '.text',
        'application/gnutar' => '.tgz',
        'audio/tsp-audio' => '.tsi',
        'application/dsptype' => '.tsp',
        'audio/tsplayer' => '.tsp',
        'text/tab-separated-values' => '.tsv',
        'text/x-uil' => '.uil',
        'application/i-deas' => '.unv',
        'application/x-ustar' => '.ustar',
        'multipart/x-ustar' => '.ustar',
        'application/x-cdlink' => '.vcd',
        'text/x-vcalendar' => '.vcs',
        'application/vda' => '.vda',
        'video/vdo' => '.vdo',
        'application/groupwise' => '.vew ',
        'application/vocaltec-media-desc' => '.vmd ',
        'application/vocaltec-media-file' => '.vmf',
        'audio/voc' => '.voc',
        'audio/x-voc' => '.voc',
        'video/vosaic' => '.vos',
        'audio/voxware' => '.vox',
        'audio/x-twinvq' => '.vqf',
        'application/x-vrml' => '.vrml',
        'x-world/x-vrt' => '.vrt',
        'application/wordperfect6.1' => '.w61',
        'audio/wav' => '.wav',
        'audio/x-wav' => '.wav',
        'application/x-qpro' => '.wb1',
        'image/vnd.wap.wbmp' => '.wbmp',
        'application/vnd.xara' => '.web',
        'application/x-123' => '.wk1',
        'windows/metafile' => '.wmf',
        'text/vnd.wap.wml' => '.wml',
        'application/vnd.wap.wmlc' => '.wmlc ',
        'text/vnd.wap.wmlscript' => '.wmls',
        'application/vnd.wap.wmlscriptc' => '.wmlsc ',
        'application/x-wpwin' => '.wpd',
        'application/x-lotus' => '.wq1',
        'application/mswrite' => '.wri',
        'application/x-wri' => '.wri',
        'text/scriplet' => '.wsc',
        'application/x-wintalk' => '.wtk ',
        'image/x-xbitmap' => '.xbm',
        'image/x-xbm' => '.xbm',
        'image/xbm' => '.xbm',
        'video/x-amt-demorun' => '.xdr',
        'xgl/drawing' => '.xgz',
        'image/vnd.xiff' => '.xif',
        'audio/xm' => '.xm',
        'application/xml' => '.xml',
        'text/xml' => '.xml',
        'xgl/movie' => '.xmz',
        'application/x-vnd.ls-xpix' => '.xpix',
        'image/xpm' => '.xpm',
        'video/x-amt-showrun' => '.xsr',
        'image/x-xwd' => '.xwd',
        'image/x-xwindowdump' => '.xwd',
        'application/x-compress' => '.z',
        'application/x-zip-compressed' => '.zip',
        'application/zip' => '.zip',
        'multipart/x-zip' => '.zip',
        'text/x-script.zsh' => '.zsh',
        'image/jpeg' => '.jpg',
        'image/png' => '.png',
        'image/bmp' => '.bmp'
    );

    private $base64_image;
    private $uploaddirectory;
    private $postvariablename;

    public $fileextension;
    public $mime;
    public $filename;
    public $filesize;

    private function __construct($options = array()){

        //Get configurations
        $postvariablename = $this->postvariablename = $options['postvariablename'];
        $this->uploaddirectory = $options['uploaddirectory'];

        //Get http payload
        $payload = file_get_contents('php://input');
        $data = json_decode($payload);

        //Get file content
        $raw_base64_image = $data->$postvariablename;

        $index_colon = strpos($raw_base64_image, ':') + 1;
        $index_semicolon = strpos($raw_base64_image, ';');
        $index_comma = strpos($raw_base64_image, ',') + 1;

        //Get MIME
        $this->mime = substr($raw_base64_image, $index_colon, $index_semicolon - $index_colon);

        //Get base64 image text
        $this->base64_image = substr($raw_base64_image, $index_comma);

        //Get file extension from mime
        $this->fileextension = $this->filetypes[$this->mime];

    }


    public function save($filename_no_extension){

        $im = imagecreatefromstring(base64_decode($this->base64_image));
        $this->filename = $filename_no_extension.$this->fileextension;
        $path = $this->uploaddirectory.'/'.$this->filename;
        $imagefunction = str_replace('/', '', $this->mime);

        if($im !== false){

            $status = $imagefunction($im, $path);
            imagedestroy($im);
            return $status;

        }else{

            return false;

        }

    }


    public static function init($uploaddirectory, $postvariablename = 'file'){

        $postvariablename = ($postvariablename) ? $postvariablename : 'file';

        return new Piccolo(array(
            'postvariablename' => $postvariablename,
            'uploaddirectory' => $uploaddirectory
        ));

    }

}