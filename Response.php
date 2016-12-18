<?php

/**
 * Created by PhpStorm.
 * User: Zesa
 * Date: 03/11/2015
 * Time: 23:33
 */

class Response
{

    const MAX_PAGE_ROWS = 10;                           //MPR
    const MAX_PAGINATION_ELEMENTS = 5;                  //MPE

    public $success = false;
    public $message = '';
    public $data;
    public $maxpages;
    public $currentpage;
    public $pages = array(1);               //By default; just one page
    public $recordscount;
    public $toprowindex = 0;
    public $exception;

    public function __construct($success, $data, $message = '', $recordscount = 0, $currentpage = 1){

        $this->success = $success;
        $this->message = $message;
        $this->data = $data;
        $this->currentpage = $currentpage;
        $this->recordscount = $recordscount;

        $this->computeTopRowIndex();
        $this->computeMaxPages();
        $this->computePages();

    }

    public function setException($e){
        $this->exception = $e;
    }

    private function computeTopRowIndex(){
        $this->toprowindex = ($this->currentpage * self::MAX_PAGE_ROWS) - self::MAX_PAGE_ROWS;
    }

    private function computePages(){

        if ($this->recordscount == 0){

            $this->pages = array();
            $this->currentpage = 0;

        }else{

            $min = min($this->pages);
            $max = max($this->pages);

            $range_start = ($this->currentpage < $max) ?
                ($this->currentpage == $min && $min > 1) ? $min - self::MAX_PAGINATION_ELEMENTS : 1
                : $max;
            $range_start = ($range_start < 1 || $range_start >= $this->maxpages) ? 1 : $range_start;

            $range_end = $range_start + self::MAX_PAGINATION_ELEMENTS;                      //Range ends at start + MPE
            $range_end = ($range_end > $this->maxpages) ? $this->maxpages : $range_end;     //Make sure range ends <= max pages


            $this->pages = range($range_start, $range_end, 1);

        }

    }

    /**
     * Compute the max number of pages from max number of rows
     */
    private function computeMaxPages(){

        $this->maxpages = (int) ceil($this->recordscount / self::MAX_PAGE_ROWS);

    }

}